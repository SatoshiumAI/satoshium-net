'use strict';
// IQ-001 Stage 1I: fictional Registry-shaped record => normalized SOURCE reference.
// This is an experimental EXPLICIT adapter, never a Registry-to-Suite production integration.
const {validateEnvelope}=require('../stage1h/reference-envelope-prototype.cjs');
function adaptRegistrySourceReference(record,request){
  const errors=[];
  const fail=(code,field)=>errors.push({code,field});
  if (!record || typeof record!=='object'||Array.isArray(record)) return {status:'FAIL',errors:[{code:'INVALID_RECORD',field:'$'}],envelope:null};
  if (!request||typeof request!=='object'||Array.isArray(request)) return {status:'FAIL',errors:[{code:'MISSING_CONTEXT',field:'request'}],envelope:null};
  const s=record.source_authority;
  if(!s||typeof s!=='object'||Array.isArray(s))return {status:'FAIL',errors:[{code:'MISSING_SOURCE_AUTHORITY',field:'source_authority'}],envelope:null};
  if(s.source_institution!=='Satoshium Certifier')fail('UNSUPPORTED_SOURCE_INSTITUTION','source_authority.source_institution');
  if(!/^SC-CERT-[0-9]{4}-[0-9]{4}$/.test(s.source_system_identifier||''))fail('INVALID_CERTIFIER_ID','source_authority.source_system_identifier');
  if(s.source_record_type!=='Certification Package')fail('SOURCE_TYPE_MISMATCH','source_authority.source_record_type');
  if(typeof s.source_record_version!=='string'||!s.source_record_version.trim())fail('MISSING_VERSION','source_authority.source_record_version');
  if(!s.authority_statement||typeof s.authority_statement!=='string')fail('MISSING_AUTHORITY_STATEMENT','source_authority.authority_statement');
  if(!request.relationship_type)fail('MISSING_EXPLICIT_RELATIONSHIP','request.relationship_type');
  if(!request.accessibility)fail('MISSING_EXPLICIT_ACCESSIBILITY','request.accessibility');
  if (Object.hasOwn(request,'lifecycle_state')||Object.hasOwn(request,'publication_state'))fail('SOURCE_STATE_NOT_VERIFIED','request.source_state');
  if(errors.length)return {status:'FAIL',errors,envelope:null};
  const envelope={
    identifier:s.source_system_identifier,
    source_institution:'Certifier',
    object_type:'Certification Package',
    version:s.source_record_version,
    provenance:{source_or_origin:s.canonical_source_url||s.authoritative_source_record},
    relationship_type:request.relationship_type,
    authority_context:'Certifier',
    accessibility:request.accessibility
  };
  const check=validateEnvelope(envelope,{version:true});
  return {status:check.status,errors:check.errors,uncertainties:check.uncertainties,envelope,noncanonical:true,authority_granted:false,source_state_claimed:false};
}
module.exports={adaptRegistrySourceReference};
