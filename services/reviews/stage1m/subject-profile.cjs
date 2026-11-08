'use strict';
// IQ-005 experiment: noncanonical process subject, never institutionally authorized.
const I=new Set(['Atlas','Navigator','Certifier','Registry','Chronicle','Anchor','Beacon','Attestor']);
const isText=x=>typeof x==='string'&&!!x.trim();
function checkProcessRelationship(x){
 const errors=[];const fail=(code,field)=>errors.push({code,field});
 const out=(status,more={})=>({status,errors,noncanonical:true,authority_granted:false,assertion_verified:false,...more});
 if(!x||typeof x!=='object'||Array.isArray(x)){fail('INVALID_INPUT','$');return out('REJECTED')}
 const {process:p,relationship:r,target:t}=x;
 if(!p||typeof p!=='object'||Array.isArray(p))fail('MISSING_PROCESS','process');
 if(!r||typeof r!=='object'||Array.isArray(r))fail('MISSING_RELATIONSHIP','relationship');
 if(!t||typeof t!=='object'||Array.isArray(t))fail('MISSING_TARGET','target');
 if(errors.length)return out('REJECTED');
 for(const k of ['local_process_id','owning_institution','governed_context_ref','profile_version'])if(!isText(p[k]))fail('MISSING_PROCESS_FIELD','process.'+k);
 if(p.canonical_object!==false)fail('PROCESS_CANONICAL_FORBIDDEN','process.canonical_object');
 if(isText(p.owning_institution)&&!I.has(p.owning_institution))fail('INVALID_PROCESS_OWNER','process.owning_institution');
 if(!['evaluates','results-in'].includes(r.type))fail('UNSUPPORTED_PREDICATE','relationship.type');
 if(r.direction!=='process-to-target')fail('INVALID_DIRECTION','relationship.direction');
 if(r.subject_process_ref!==p.local_process_id)fail('SUBJECT_MISMATCH','relationship.subject_process_ref');
 if(r.target_identifier!==t.identifier)fail('TARGET_MISMATCH','relationship.target_identifier');
 if(r.asserting_institution!==p.owning_institution)fail('ASSERTING_INSTITUTION_MISMATCH','relationship.asserting_institution');
 if(!isText(r.provenance_basis))fail('MISSING_PROVENANCE','relationship.provenance_basis');
 if(!isText(t.identifier)||!isText(t.owning_institution)||!isText(t.object_type))fail('MISSING_TARGET_IDENTITY','target');
 if(isText(t.owning_institution)&&!I.has(t.owning_institution))fail('INVALID_TARGET_OWNER','target.owning_institution');
 if(t.identifier===p.local_process_id)fail('PROCESS_TARGET_ID_COLLISION','target.identifier');
 if(Object.hasOwn(t,'canonical_object')&&typeof t.canonical_object!=='boolean')fail('INVALID_TARGET_CANONICAL_FLAG','target.canonical_object');
 if(r.type==='results-in'&&r.result_status==='authorized')fail('AUTHORITY_CLAIM_UNSUPPORTED','relationship.result_status');
 if(errors.length)return out('REJECTED',{original:structuredClone(x)});
 return out('PROFILED_ONLY',{profile:structuredClone(x),subject_kind:'governed-noncanonical-process'});
}
module.exports={checkProcessRelationship};
