'use strict';
// Stage 1O: offline fictional IQ-007 classification, not a production retry/orchestration engine.
const TYPES=Object.freeze([
'missing-source','broken-reference','stale-version','unpublished','withdrawn',
'unresolved-identifier','malformed-payload','contradictory-metadata','institution-unavailable',
'unknown-relationship','unsupported','timeout','partial-response','unknown'
]);
const RETRY_CANDIDATES=new Set(['broken-reference','institution-unavailable','timeout','partial-response']);
const REVIEW_CANDIDATES=new Set(['contradictory-metadata','unknown-relationship','unresolved-identifier','stale-version','malformed-payload','unsupported']);
const safeCopy=v=>structuredClone(v);
const nonempty=v=>typeof v==='string'&&!!v.trim();
function classifyFailure(input){
 const errors=[];
 const flag=(code,field)=>errors.push({code,field});
 const response=(classification,fields={})=>({
  classification,errors,authority_granted:false,noncanonical:true,
  institutional_outcome:'NOT_DETERMINED',retry_executed:false,canonical_write_performed:false,...fields
 });
 if(!input||typeof input!=='object'||Array.isArray(input)){flag('INVALID_INPUT','$');return response('REJECTED')}
 const fields=['failure_kind','identifier','source_institution','stage','observed_at','input_version_at_use','expected_condition','observed_condition'];
 for(const f of fields)if(!nonempty(input[f]))flag('MISSING_CONTEXT',f);
 if(!Array.isArray(input.evidence)||!input.evidence.length)flag('MISSING_EVIDENCE','evidence');
 else if(input.evidence.some(e=>!e||typeof e!=='object'||!nonempty(e.source)||!nonempty(e.observation)))flag('INVALID_EVIDENCE','evidence');
 if(nonempty(input.failure_kind)&&!TYPES.includes(input.failure_kind))flag('UNKNOWN_FAILURE_TOKEN','failure_kind');
 if(input.retry_attempts!==undefined&&(!Number.isInteger(input.retry_attempts)||input.retry_attempts<0))flag('BAD_ATTEMPT_COUNT','retry_attempts');
 if(input.last_known!==undefined && input.last_known!==null && (typeof input.last_known!=='object'||Array.isArray(input.last_known)))flag('BAD_HISTORICAL_CONTEXT','last_known');
 if(input.failure_kind==='contradictory-metadata'&&(!Array.isArray(input.conflicting_values)||input.conflicting_values.length<2))flag('CONFLICT_VALUES_REQUIRED','conflicting_values');
 if(input.failure_kind==='partial-response'&&(!Array.isArray(input.missing_fields)||input.missing_fields.length===0))flag('PARTIAL_FIELDS_REQUIRED','missing_fields');
 if(errors.length)return response('REJECTED',{original:safeCopy(input)});
 // No favorable outcome is ever inferred. Last-known is historical only and not mapped to current state.
 const kind=input.failure_kind;
 const retry_candidate=RETRY_CANDIDATES.has(kind);
 const manual_review_candidate=REVIEW_CANDIDATES.has(kind);
 return response('UNRESOLVED_CONDITION',{
  failure_kind:kind,identifier:input.identifier,source_institution:input.source_institution,stage:input.stage,
  observed_at:input.observed_at,input_version_at_use:input.input_version_at_use,
  expected_condition:input.expected_condition,observed_condition:input.observed_condition,
  evidence:safeCopy(input.evidence),last_known:input.last_known===undefined?null:safeCopy(input.last_known),
  conflicting_values:kind==='contradictory-metadata'?safeCopy(input.conflicting_values):null,
  current_state:'unknown',current_version:'unknown',source_validity:'NOT_DETERMINED',
  retry_class:retry_candidate?'TRANSIENT_CANDIDATE':'NOT_AUTOMATICALLY_RETRYABLE',
  retry_authorized:false,manual_review_candidate,
  input_version_pinned:input.input_version_at_use,retry_attempts_recorded:input.retry_attempts??0,
  action:'HOLD_FOR_GOVERNED_DECISION'
 });
}
function guardPromotion(classification,claimed){
 const forbidden=new Set(['PASS','VALID','SUPPORTED','TRUSTED','CURRENT','ACCEPTED','SUCCESS','ACTIVE','PUBLISHED']);
 if(classification!=='UNRESOLVED_CONDITION')return {allowed:false,reason:'NO_VERIFIED_SUCCESS_EVIDENCE'};
 if(typeof claimed!=='string'||!claimed.trim())return {allowed:false,reason:'NO_VERIFIED_SUCCESS_EVIDENCE'};
 return {allowed:false,reason:forbidden.has(claimed.toUpperCase())?'PROHIBITED_FAVORABLE_PROMOTION':'NOT_AN_INSTITUTIONAL_OUTCOME_ENGINE'};
}
module.exports={classifyFailure,guardPromotion,TYPES};
