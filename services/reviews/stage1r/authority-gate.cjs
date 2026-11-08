'use strict';
// Stage 1R IQ-010 fictional context checker. Never dispatches operations or grants real authority.
const INSTITUTIONS=Object.freeze(['Atlas','Certifier','Registry','Chronicle','Anchor','Beacon','Attestor','Navigator']);
const OWNERS=Object.freeze({
 'Jurisdiction Intelligence Package':'Atlas',
 'Certification Package':'Certifier',
 'SREG':'Registry',
 'Chronicle Entry':'Chronicle',
 'Integrity Reference':'Anchor',
 'Discovery Signal':'Beacon',
 'Attestation':'Attestor',
 'Trust Statement':'Attestor',
 'Navigator Workflow Definition':'Navigator'
});
const text=v=>typeof v==='string'&&v.trim().length>0;
const obj=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
const clone=structuredClone;
const isTime=v=>text(v)&&/^\d{4}-\d\d-\d\dT/.test(v)&&Number.isFinite(Date.parse(v));
function inspectAuthority(input){
 const errors=[];
 const err=(code,field)=>errors.push({code,field});
 const base={noncanonical:true,authority_granted:false,institutional_operation_performed:false,canonical_write_performed:false,output_produced:false,institutional_outcome:'NOT_DETERMINED'};
 const answer=(classification,additional={})=>({...base,classification,errors,...additional});
 if(!obj(input)){err('INVALID_ROOT','$');return answer('REJECTED');}
 for(const field of ['request_id','requested_at','requested_action','requested_object_type','receiving_institution','target_identifier','caller_identity'])if(!text(input[field]))err('MISSING_REQUIRED_FIELD',field);
 if(text(input.requested_at)&&!isTime(input.requested_at))err('INVALID_TIMESTAMP','requested_at');
 if(text(input.receiving_institution)&&!INSTITUTIONS.includes(input.receiving_institution))err('UNKNOWN_RECEIVING_INSTITUTION','receiving_institution');
 if(text(input.requested_object_type)&&!Object.hasOwn(OWNERS,input.requested_object_type))err('UNKNOWN_OBJECT_TYPE','requested_object_type');
 if(!obj(input.technical_access))err('MISSING_TECHNICAL_ACCESS','technical_access');
 else {
  if(typeof input.technical_access.authenticated!=='boolean'||typeof input.technical_access.permitted!=='boolean')err('UNVERIFIED_TECHNICAL_CONTEXT','technical_access');
  if(!text(input.technical_access.mechanism))err('MISSING_TECHNICAL_MECHANISM','technical_access.mechanism');
 }
 if(!obj(input.institutional_authority))err('MISSING_INSTITUTIONAL_AUTHORITY','institutional_authority');
 else {
  for(const field of ['owning_institution','governing_rule','approval_reference','authorized_principal','approved_action','approved_target'])if(!text(input.institutional_authority[field]))err('MISSING_AUTHORITY_CONTEXT','institutional_authority.'+field);
  if(typeof input.institutional_authority.approved!=='boolean')err('UNVERIFIED_AUTHORITY_DECISION','institutional_authority.approved');
 }
 if(!obj(input.provenance)||!text(input.provenance.source_institution)||!text(input.provenance.source_identifier)||!text(input.provenance.source_object_type))err('PROVENANCE_INCOMPLETE','provenance');
 if(!Array.isArray(input.input_references)||!input.input_references.length||input.input_references.some(x=>!obj(x)||!text(x.identifier)||!text(x.source_institution)||!text(x.object_type)))err('INPUT_REFERENCES_INCOMPLETE','input_references');
 if(!obj(input.audit_context))err('MISSING_AUDIT_CONTEXT','audit_context');
 else {
  for(const f of ['trace_id','actor_attribution','expected_resulting_object_type','result_status'])if(!text(input.audit_context[f]))err('MISSING_AUDIT_FIELD','audit_context.'+f);
  if(input.audit_context.result_status!=='not-executed')err('PRETENDED_EXECUTION','audit_context.result_status');
 }
 if(input.requested_action!=='write-canonical-object')err('UNSUPPORTED_ACTION','requested_action');
 if(Object.hasOwn(input,'institutional_outcome')||Object.hasOwn(input,'resulting_object')||Object.hasOwn(input,'granted_authority'))err('SELF_ASSERTED_RESULT','$');
 if(errors.length)return answer('REJECTED',{submitted_context:clone(input)});
 const owner=OWNERS[input.requested_object_type];
 const institutional=input.institutional_authority;
 const checks={technical_authenticated:input.technical_access.authenticated,technical_permitted:input.technical_access.permitted,owner_matches_receiver:owner===input.receiving_institution,authority_owner_matches:institutional.owning_institution===owner,principal_matches:institutional.authorized_principal===input.caller_identity,action_matches:institutional.approved_action===input.requested_action,target_matches:institutional.approved_target===input.target_identifier,governance_approval_declared:institutional.approved,audit_attribution_matches:input.audit_context.actor_attribution===input.caller_identity,result_type_matches:input.audit_context.expected_resulting_object_type===input.requested_object_type,source_institution_known:INSTITUTIONS.includes(input.provenance.source_institution),input_source_known:input.input_references.every(r=>INSTITUTIONS.includes(r.source_institution))};
 const failed=Object.entries(checks).filter(([,v])=>!v).map(([k])=>k);
 if(failed.length)return answer('BLOCKED',{reason:'AUTHORIZATION_OR_AUTHORITY_CONTEXT_NOT_ESTABLISHED',failed_checks:failed,checks,request_id:input.request_id,audit_trace:clone(input.audit_context)});
 // This explicitly does NOT independently verify the asserted approval nor grant real authority.
 return answer('CONTEXT_READY_FOR_INSTITUTIONAL_VERIFICATION',{reason:'CLAIMED_CONTEXT_CONSISTENT_ONLY',checks,request_id:input.request_id,audit_trace:clone(input.audit_context),receiving_owner:owner,action:'HOLD_NO_EXECUTION'});
}
module.exports={inspectAuthority,OWNERS,INSTITUTIONS};
