'use strict';
// IQ-009 experimental offline retry classification: NO transport, authority or writes.
const nonempty=x=>typeof x==='string'&&x.trim().length>0;
const object=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
const clone=x=>structuredClone(x);
const RESULTS=['timeout','institution-unavailable','broken-reference','partial-response','unknown','institutional-rejection','completed','failed-terminal'];
const TRANSIENT=new Set(['timeout','institution-unavailable','broken-reference','partial-response']);
const BRANCH_STATES=['pending','awaiting-response','completed','failed','paused','unknown','skipped'];
function inspectRetry(x){
 const errors=[];const error=(code,field)=>errors.push({code,field});
 const base={noncanonical:true,authority_granted:false,retry_authorized:false,retry_executed:false,canonical_write_performed:false,institutional_outcome:'NOT_DETERMINED'};
 const done=(classification,extra={})=>({...base,classification,errors,...extra});
 if(!object(x)){error('INVALID_ROOT','$');return done('REJECTED');}
 for(const k of ['workflow_definition','handoff_identifier','receiving_institution','requested_action','operation_key'])if(!nonempty(x[k]))error('MISSING_CONTEXT',k);
 if(typeof x.workflow_allows_refresh!=='boolean')error('REFRESH_POLICY_REQUIRED','workflow_allows_refresh');
 if(!Array.isArray(x.attempts))error('ATTEMPT_HISTORY_REQUIRED','attempts');
 if(!object(x.proposal))error('PROPOSAL_REQUIRED','proposal');
 if(!object(x.branches))error('BRANCH_LEDGER_REQUIRED','branches');
 if(Array.isArray(x.attempts)){
  const ids=new Set(),sequences=new Set();
  x.attempts.forEach((a,i)=>{
   const p='attempts['+i+']';
   if(!object(a)){error('INVALID_ATTEMPT',p);return;}
   for(const k of ['attempt_id','attempted_at','result','handoff_identifier','receiving_institution','operation_key','idempotency_key','branch_id'])if(!nonempty(a[k]))error('MISSING_ATTEMPT_FIELD',p+'.'+k);
   if(!Number.isInteger(a.sequence)||a.sequence!==i+1)error('INVALID_SEQUENCE',p+'.sequence');
   if(nonempty(a.attempt_id)){if(ids.has(a.attempt_id))error('DUPLICATE_ATTEMPT_ID',p);ids.add(a.attempt_id);}
   if(Number.isInteger(a.sequence)){if(sequences.has(a.sequence))error('DUPLICATE_SEQUENCE',p);sequences.add(a.sequence);}
   if(!nonempty(a.attempted_at)||!Number.isFinite(Date.parse(a.attempted_at)))error('INVALID_ATTEMPT_TIME',p);
   if(nonempty(a.result)&&!RESULTS.includes(a.result))error('UNRECOGNIZED_RESULT',p);
   if(!object(a.input_snapshot)||!nonempty(a.input_snapshot.identifier)||!nonempty(a.input_snapshot.version)||!nonempty(a.input_snapshot.state))error('INVALID_INPUT_SNAPSHOT',p);
   if(nonempty(a.handoff_identifier)&&a.handoff_identifier!==x.handoff_identifier)error('HISTORY_HANDOFF_CONFLICT',p);
   if(nonempty(a.receiving_institution)&&a.receiving_institution!==x.receiving_institution)error('HISTORY_RECEIVER_CONFLICT',p);
   if(nonempty(a.operation_key)&&a.operation_key!==x.operation_key)error('HISTORY_OPERATION_CONFLICT',p);
  });
 }
 const p=x.proposal;
 if(object(p)){
  for(const k of ['attempt_id','attempted_at','reason','idempotency_key','branch_id','handoff_identifier'])if(!nonempty(p[k]))error('MISSING_PROPOSAL_FIELD','proposal.'+k);
  if(!Number.isInteger(p.sequence)||p.sequence<1)error('INVALID_PROPOSAL_SEQUENCE','proposal.sequence');
  if(nonempty(p.attempted_at)&&!Number.isFinite(Date.parse(p.attempted_at)))error('INVALID_PROPOSAL_TIME','proposal.attempted_at');
  if(!object(p.input_snapshot)||!nonempty(p.input_snapshot.identifier)||!nonempty(p.input_snapshot.version)||!nonempty(p.input_snapshot.state))error('INVALID_PROPOSAL_INPUT','proposal.input_snapshot');
  if(nonempty(p.handoff_identifier)&&p.handoff_identifier!==x.handoff_identifier)error('NEW_HANDOFF_BASIS','proposal.handoff_identifier');
 }
 if(object(x.branches)){
  for(const [key,b] of Object.entries(x.branches)){
   if(!object(b)||!BRANCH_STATES.includes(b.workflow_state)||!Array.isArray(b.events))error('INVALID_BRANCH',key);
  }
  if(object(p)&&nonempty(p.branch_id)&&!Object.hasOwn(x.branches,p.branch_id))error('UNKNOWN_BRANCH','proposal.branch_id');
 }
 if(errors.length)return done('REJECTED',{history:clone(x.attempts??null)});
 const attempts=x.attempts;
 if(p.sequence!==attempts.length+1)return done('BLOCKED',{reason:'NONCONTIGUOUS_NEXT_SEQUENCE',history:clone(attempts),branches:clone(x.branches)});
 if(attempts.some(a=>a.attempt_id===p.attempt_id))return done('BLOCKED',{reason:'DUPLICATE_ATTEMPT_ID',history:clone(attempts),branches:clone(x.branches)});
 if(attempts.some(a=>a.idempotency_key!==p.idempotency_key))return done('BLOCKED',{reason:'IDEMPOTENCY_KEY_CHANGED',history:clone(attempts),branches:clone(x.branches)});
 if(attempts.some(a=>a.branch_id!==p.branch_id))return done('BLOCKED',{reason:'BRANCH_ID_CHANGED',history:clone(attempts),branches:clone(x.branches)});
 if(attempts.length&&Date.parse(p.attempted_at)<=Date.parse(attempts.at(-1).attempted_at))return done('BLOCKED',{reason:'ATTEMPT_TIME_NOT_INCREASING',history:clone(attempts),branches:clone(x.branches)});
 const first=attempts[0]?.input_snapshot;
 const changed=first!==undefined&&JSON.stringify(first)!==JSON.stringify(p.input_snapshot);
 if(changed)return done('NEW_HANDOFF_BASIS_REQUIRED',{reason:x.workflow_allows_refresh?'EXPLICIT_REFRESH_REQUIRES_NEW_HANDOFF':'INPUT_REFRESH_NOT_AUTHORIZED',original_input:clone(first),proposed_input:clone(p.input_snapshot),history:clone(attempts),branches:clone(x.branches)});
 const prior=attempts.at(-1);
 if(attempts.some(a=>a.result==='completed'))return done('BLOCKED',{reason:'POSSIBLE_DUPLICATE_INSTITUTIONAL_ACTION',history:clone(attempts),branches:clone(x.branches)});
 if(attempts.some(a=>a.result==='unknown'))return done('HOLD_UNKNOWN',{reason:'COMPLETION_UNKNOWN_NO_RETRY_AUTHORITY',history:clone(attempts),branches:clone(x.branches)});
 if(prior&&!TRANSIENT.has(prior.result))return done('BLOCKED',{reason:'NONTRANSIENT_PRIOR_RESULT',history:clone(attempts),branches:clone(x.branches)});
 return done('CANDIDATE_FOR_GOVERNED_REVIEW',{reason:prior?'TRANSIENT_FAILURE_CANDIDATE':'INITIAL_ATTEMPT_CANDIDATE',original_input:first?clone(first):clone(p.input_snapshot),history:clone(attempts),branches:clone(x.branches),attempt_proposal:clone(p)});
}
module.exports={inspectRetry,RESULTS,BRANCH_STATES};
