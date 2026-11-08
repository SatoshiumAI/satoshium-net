'use strict';
// IQ-011 isolated fictional audit context inspection: never writes or verifies authority.
const auditCheck=function auditCheck(input){
 const owners={SREG:'Registry', 'Certification Package':'Certifier','Discovery Signal':'Beacon','Trust Statement':'Attestor','Attestation':'Attestor','Chronicle Entry':'Chronicle','Integrity Reference':'Anchor','Navigator Workflow Definition':'Navigator','Jurisdiction Intelligence Package':'Atlas'};
 const obj=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
 const str=x=>typeof x==='string'&&x.trim().length>0;
 const err=[];const fail=(code,path)=>err.push({code,path});
 const result=(status,extra={})=>({status,errors:err,noncanonical:true,verified:false,authority_granted:false,write_performed:false,production_audit_persisted:false,institutional_outcome:'NOT_DETERMINED',...extra});
 if(!obj(input)){fail('INVALID_ROOT','$');return result('REJECTED')}
 if(!Array.isArray(input.events)||input.events.length===0){fail('MISSING_EVENTS','events');return result('REJECTED')}
 const ids=new Set(),traces=new Set(),out=[];
 input.events.forEach((e,i)=>{
  const p='events['+i+']';if(!obj(e)){fail('INVALID_EVENT',p);return}
  for(const f of ['event_id','trace_id','caller_identity','requested_action','receiving_institution','target_identifier','target_object_type','timestamp','event_type'])if(!str(e[f]))fail('MISSING_FIELD',p+'.'+f);
  if(str(e.event_id)){if(ids.has(e.event_id))fail('DUPLICATE_EVENT_ID',p);ids.add(e.event_id)}
  if(str(e.trace_id)){if(traces.has(e.trace_id))fail('DUPLICATE_TRACE_ID',p);traces.add(e.trace_id)}
  if(!str(e.timestamp)||!Number.isFinite(Date.parse(e.timestamp))||!/^\d{4}-\d\d-\d\dT/.test(e.timestamp))fail('INVALID_TIME',p);
  if(e.requested_action!=='write-canonical-object')fail('UNSUPPORTED_ACTION',p);
  if(!['proposed','reported-outcome'].includes(e.event_type))fail('UNSUPPORTED_EVENT_TYPE',p);
  const owner=owners[e.target_object_type];
  if(!owner)fail('UNKNOWN_OBJECT_TYPE',p);
  else if(owner!==e.receiving_institution)fail('OWNER_CONFLICT',p);
  const a=e.authority_context;
  if(!obj(a))fail('MISSING_AUTHORITY',p);
  else{
   for(const f of ['governing_rule','approval_reference','approved_principal','approved_action','approved_target','owning_institution'])if(!str(a[f]))fail('MISSING_AUTHORITY_FIELD',p+'.'+f);
   if(a.approved!==true)fail('APPROVAL_NOT_DECLARED',p);
   if(a.approved_principal!==e.caller_identity)fail('CALLER_SCOPE_MISMATCH',p);
   if(a.approved_action!==e.requested_action)fail('ACTION_SCOPE_MISMATCH',p);
   if(a.approved_target!==e.target_identifier)fail('TARGET_SCOPE_MISMATCH',p);
   if(owner&&a.owning_institution!==owner)fail('AUTHORITY_OWNER_MISMATCH',p);
  }
  if(!Array.isArray(e.input_references)||!e.input_references.length||e.input_references.some(r=>!obj(r)||!str(r.identifier)||!str(r.source_institution)||!str(r.object_type)||!str(r.provenance)))fail('INPUT_REFS_INCOMPLETE',p);
  if(!obj(e.audit_trace)||!str(e.audit_trace.recorded_by)||!str(e.audit_trace.correlation_id)||!str(e.audit_trace.recorded_at)||!Number.isFinite(Date.parse(e.audit_trace.recorded_at)))fail('AUDIT_TRACE_INCOMPLETE',p);
  else if(e.audit_trace.recorded_by!==e.caller_identity)fail('AUDIT_ATTRIBUTION_MISMATCH',p);
  if(e.event_type==='proposed'){
   if(e.resulting_object!==null)fail('PROPOSED_OUTPUT_FORBIDDEN',p);
   if(e.reported_result!=='not-executed')fail('PROPOSED_RESULT_FORBIDDEN',p);
  }else if(e.event_type==='reported-outcome'){
   if(!['reported-success','reported-failed','reported-rejected','reported-unknown'].includes(e.reported_result))fail('UNRECOGNIZED_RESULT',p);
   if(e.reported_result==='reported-success'){
    const r=e.resulting_object;
    if(!obj(r)||!str(r.identifier)||!str(r.owning_institution)||!str(r.object_type))fail('REPORTED_OUTPUT_MISSING',p);
    else if(r.owning_institution!==owner||r.object_type!==e.target_object_type)fail('OUTPUT_OWNER_CONFLICT',p);
   }else if(e.resulting_object!==null)fail('UNCONFIRMED_OUTPUT',p);
  }
  if(Object.prototype.hasOwnProperty.call(e,'write_performed')||Object.prototype.hasOwnProperty.call(e,'authority_granted'))fail('SELF_ASSERTED_OPERATION',p);
  out.push({event_id:e.event_id,trace_id:e.trace_id,caller_identity:e.caller_identity,receiver:e.receiving_institution,reported_result:e.reported_result});
 });
 return err.length?result('REJECTED'):result('CONTEXT_ONLY_REVIEW_REQUIRED',{events:JSON.parse(JSON.stringify(out)),requires_institutional_verification:true});
};
module.exports={auditCheck};
