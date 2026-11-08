'use strict';
// IQ-008 synthetic handoff validation only: does not invoke, authorize, retry or write.
const INSTITUTIONS=Object.freeze(['Atlas','Certifier','Registry','Chronicle','Anchor','Beacon','Attestor']);
const FIELDS=Object.freeze(['workflow_definition','workflow_execution_context','handoff_identifier','sending_step','receiving_institution','requested_action','input_references','input_provenance','authority_context','preconditions','expected_output','completion_criteria','failure_model','retry_policy','timeout_unavailable_policy','unknown_state_handling','timestamp','traceability_context']);
const WORKFLOW_STATES=new Set(['Pending','In Progress','Awaiting Response','Completed','Failed','Paused','Cancelled','Partially Completed','Temporarily Unavailable','Manual Review Required']);
const NONCANONICAL=Object.freeze({authority_granted:false,institutional_outcome:'NOT_DETERMINED',institutional_action_executed:false,canonical_write_performed:false,retry_authorized:false,retry_executed:false,noncanonical:true});
const isObject=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
const hasText=x=>typeof x==='string'&&x.trim().length>0;
const copied=x=>structuredClone(x);
function inspectHandoff(input){
 const errors=[];
 const add=(code,field)=>errors.push({code,field});
 const result=(classification,extra={})=>({...NONCANONICAL,classification,errors,...extra});
 if(!isObject(input)){add('INVALID_ROOT','$');return result('REJECTED');}
 for(const f of FIELDS){if(!Object.hasOwn(input,f)||input[f]===null||input[f]===undefined)add('MISSING_FIELD',f);}
 for(const f of ['workflow_definition','workflow_execution_context','handoff_identifier','sending_step','receiving_institution','requested_action','timestamp']){
  if(Object.hasOwn(input,f)&&!hasText(input[f]))add('INVALID_TEXT',f);
 }
 if(hasText(input.receiving_institution)&&!INSTITUTIONS.includes(input.receiving_institution))add('UNRECOGNIZED_RECEIVER','receiving_institution');
 if(hasText(input.timestamp)&&!(Number.isFinite(Date.parse(input.timestamp))&&/^\d{4}-\d\d-\d\dT/.test(input.timestamp)))add('INVALID_TIMESTAMP','timestamp');
 for(const f of ['input_provenance','authority_context','preconditions','expected_output','completion_criteria','failure_model','retry_policy','timeout_unavailable_policy','unknown_state_handling','traceability_context']){
  if(Object.hasOwn(input,f)&&!isObject(input[f]))add('INVALID_OBJECT',f);
  else if(isObject(input[f])&&!Object.keys(input[f]).length)add('EMPTY_CONTEXT',f);
 }
 if(Object.hasOwn(input,'input_references')&&!Array.isArray(input.input_references))add('INVALID_REFERENCES','input_references');
 else if(Array.isArray(input.input_references)){
  input.input_references.forEach((x,i)=>{
   if(!isObject(x)||!hasText(x.identifier)||!hasText(x.source_institution)||!hasText(x.object_type)||!hasText(x.provenance))add('INVALID_REFERENCE',`input_references[${i}]`);
  });
 }
 if(isObject(input.expected_output)&&(!hasText(input.expected_output.type)||typeof input.expected_output.canonical_reference_expected!=='boolean'))add('INVALID_OUTPUT','expected_output');
 if(isObject(input.traceability_context)&&(!hasText(input.traceability_context.correlation_id)||!hasText(input.traceability_context.originating_workflow_step)))add('INVALID_TRACE','traceability_context');
 if(isObject(input.authority_context)&&(!hasText(input.authority_context.requester)||!hasText(input.authority_context.receiving_authority)||input.authority_context.receiving_authority!==input.receiving_institution))add('INVALID_AUTHORITY_CONTEXT','authority_context');
 if(isObject(input.unknown_state_handling)&&input.unknown_state_handling.assume_success!==false)add('UNKNOWN_MUST_NOT_SUCCEED','unknown_state_handling');
 if(isObject(input.retry_policy)&&input.retry_policy.automatic_execution===true)add('RETRY_EXECUTION_OUT_OF_SCOPE','retry_policy');
 if(Object.hasOwn(input,'workflow_state')&&!WORKFLOW_STATES.has(input.workflow_state))add('INVALID_WORKFLOW_STATE','workflow_state');
 if(Object.hasOwn(input,'institutional_state')||Object.hasOwn(input,'institutional_outcome')||Object.hasOwn(input,'authority_granted')||Object.hasOwn(input,'canonical_write_performed'))add('INSTITUTIONAL_DETERMINATION_FORBIDDEN','$');
 if(errors.length)return result('REJECTED',{submitted_context:copied(input)});
 return result('HANDOFF_CONTEXT_VALIDATED',{
  handoff:copied(input),workflow_state:input.workflow_state??'Pending',
  receiving_institution:input.receiving_institution,
  handoff_identifier:input.handoff_identifier,
  traceability_context:copied(input.traceability_context),
  action:'HOLD_FOR_RECEIVING_INSTITUTION',
  institutional_state:'NOT_DETERMINED'
 });
}
module.exports={inspectHandoff,FIELDS,INSTITUTIONS,WORKFLOW_STATES};
