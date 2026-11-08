'use strict';
// Stage 2B: experimental *fictional-only* contract context inspector; no I/O or institutional decisions.
const inspectCandidate=function inspectCandidate(input){
 const base={noncanonical:true,source_verified:false,registry_authorized:false,registry_write_performed:false,sreg_issued:false,production_acceptance:false,institutional_outcome:'NOT_DETERMINED'};
 const output=(classification,reason,details={})=>({...base,classification,reason,...details});
 const object=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
 const text=x=>typeof x==='string'&&x.trim().length>0;
 if(!object(input)||!object(input.source)||!object(input.registry)||!object(input.authorization)||!object(input.attempt)||!object(input.report))return output('REJECTED','MISSING_CONTEXT');
 const {source:s,registry:r,authorization:a,attempt:t,report:p}=input;
 if(!text(s.identifier))return output('REJECTED','MISSING_SOURCE_IDENTIFIER');
 if(!/^SC-CERT-[0-9]{4}-[0-9]{4}$/.test(s.identifier))return output('REJECTED','UNRECOGNIZED_NATIVE_IDENTIFIER');
 if(s.owner!=='Certifier'||s.object_type!=='Certification Package'||!text(s.provenance)||!text(s.version_at_use)||!text(s.observed_version)||s.status_namespace!=='Certifier')return output('REJECTED','SOURCE_CONTEXT_MISMATCH');
 if(r.owner!=='Registry'||r.receiving_institution!=='Registry')return output('REJECTED','RECEIVING_AUTHORITY_MISMATCH');
 if(!text(t.idempotency_key)||!text(a.caller_identity)||!text(a.governing_rule)||!text(a.approval_reference))return output('REJECTED','MISSING_TRACE_OR_GOVERNANCE_CONTEXT');
 if(a.technical_authenticated!==true||a.registry_approval_declared!==true)return output('REJECTED','AUTHORITY_NOT_DECLARED');
 if(r.candidate_lifecycle!==null||r.proposed_sreg_identifier!==null)return output('REJECTED','SOURCE_TO_REGISTRY_AUTHORITY_ESCALATION');
 if(r.native_predicate!=='registers')return output('DECISION_REQUIRED','NATIVE_PREDICATE_MUST_REMAIN_REGISTERS');
 if(r.suite_predicate!==null)return output('DECISION_REQUIRED','SUITE_PREDICATE_NOT_ADOPTED');
 if(s.availability==='unavailable'||s.status==='unknown')return output('HOLD_UNKNOWN','SOURCE_UNKNOWN', {last_known_source_version:s.version_at_use,current_source_state:'unknown'});
 if(s.availability!=='available')return output('REJECTED','INVALID_SOURCE_AVAILABILITY');
 if(s.version_at_use!==s.observed_version)return output('HOLD_REVIEW','SOURCE_VERSION_CHANGED',{source_version_at_use:s.version_at_use,observed_source_version:s.observed_version});
 if(s.source_kind!=='canonical-package-reference')return output('HOLD_REVIEW','SAMPLE_OR_UNVERIFIED_SOURCE_BASIS');
 if(['WITHDRAWN','SUPERSEDED','SUSPENDED','REJECTED'].includes(s.status))return output('HOLD_REVIEW','SOURCE_STATE_REQUIRES_GOVERNED_REVIEW');
 if(s.status!=='CERTIFIED')return output('HOLD_UNKNOWN','UNMAPPED_SOURCE_STATUS');
 if(t.prior_registry_response!=='none')return output('HOLD_REVIEW','POSSIBLE_DUPLICATE_OR_PRIOR_INSTITUTIONAL_RESPONSE');
 if(p.reported_result==='reported-success'){
   if(!object(p.registry_readback)||p.registry_readback.source_identifier!==s.identifier||p.registry_readback.issuer!=='Registry'||!text(p.registry_readback.sreg_identifier))return output('HOLD_UNKNOWN','REPORTED_SUCCESS_WITHOUT_OWNER_READBACK');
   return output('GOVERNED_VERIFICATION_REQUIRED','FICTIONAL_READBACK_REQUIRES_INDEPENDENT_VERIFICATION',{readback_context:JSON.parse(JSON.stringify(p.registry_readback))});
 }
 if(p.reported_result!=='none')return output('HOLD_REVIEW','OUTCOME_REQUIRES_GOVERNED_REVIEW');
 return output('CONTEXT_ONLY','NEEDS_REAL_ISSUER_AND_REGISTRY_VERIFICATION',{source_reference:{identifier:s.identifier,version_at_use:s.version_at_use,provenance:s.provenance},native_registry_predicate:r.native_predicate});
};
module.exports={inspectCandidate};
