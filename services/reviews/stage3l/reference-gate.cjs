'use strict';
// NONCANONICAL, FICTIONAL, IN-MEMORY contract sketch. No IO, crypto, networking or issuance.
const obj=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
const filled=v=>typeof v==='string'&&v.trim().length>0;
const knownKeys=['source_institution','source_system_identifier','canonical_source_reference','source_record_type','source_version_at_use','observed_at','source_status_claim','provenance_reference','recipient_context','verification_state','authority_claim','readback_state'];
function assess(input){
 const base={noncanonical:true,accepted:false,authenticated:false,write_performed:false,production_acceptance:false,owner_approved:false};
 const output=(classification,reason)=>({...base,classification,reason});
 if(!obj(input))return output('REJECTED','INVALID_REFERENCE');
 if(Object.keys(input).some(k=>!knownKeys.includes(k)))return output('REJECTED','UNKNOWN_FIELD');
 for(const k of ['source_institution','source_system_identifier','canonical_source_reference','source_record_type','source_version_at_use','observed_at','source_status_claim','provenance_reference','recipient_context','verification_state']){
  if(!filled(input[k]))return output('HOLD_MISSING','REQUIRED_FIELD_UNAVAILABLE');
 }
 if(input.authority_claim===true||input.owner_approved===true||input.write_performed===true)return output('REJECTED','AUTHORITY_ESCALATION');
 if(input.source_institution!=='Satoshium Certifier'||input.source_record_type!=='Certification Package')return output('REJECTED','SOURCE_DOMAIN_MISMATCH');
 if(!/^SC-CERT-\d{4}-\d{4}$/.test(input.source_system_identifier))return output('REJECTED','INVALID_SOURCE_IDENTIFIER');
 const prefix='https://satoshium.us/certifier/certifications/';
 if(input.canonical_source_reference!==prefix+input.source_system_identifier+'/')return output('REJECTED','CANONICAL_SOURCE_MISMATCH');
 if(!/^\d+(?:\.\d+)*$/.test(input.source_version_at_use))return output('REJECTED','INVALID_HISTORICAL_VERSION');
 if(!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(input.observed_at)||Number.isNaN(Date.parse(input.observed_at)))return output('HOLD_UNKNOWN','OBSERVATION_TIME_UNVERIFIABLE');
 if(!/^[a-f0-9]{40}$/.test(input.provenance_reference))return output('HOLD_UNKNOWN','SOURCE_PIN_MISSING');
 if(input.recipient_context!=='documentary-only')return output('REJECTED','RECEIVER_PERMISSION_ESCALATION');
 if(input.verification_state!=='unverified')return output('REJECTED','VERIFICATION_OVERCLAIM');
 if(input.authority_claim!==undefined&&input.authority_claim!==false)return output('REJECTED','INVALID_AUTHORITY_CLAIM');
 if(input.readback_state==='failed'||input.readback_state==='conflict')return output('HOLD_CONFLICT','SOURCE_READBACK_CONFLICT');
 if(input.readback_state===undefined||input.readback_state==='unknown'||input.readback_state==='unavailable')return output('HOLD_UNKNOWN','SOURCE_CURRENTNESS_UNVERIFIED');
 if(input.readback_state!=='fictional-historical-only')return output('REJECTED','UNRECOGNIZED_READBACK');
 if(input.source_status_claim==='unknown'||input.source_status_claim==='unavailable')return output('HOLD_UNKNOWN','SOURCE_STATUS_UNKNOWN');
 // Deliberately no status enum mapping; even quoted status is not an authenticated issuer assertion.
 return output('DOCUMENTARY_REVIEW_CANDIDATE','OWNER_CONTRACT_AND_SOURCE_AUTHORITY_NOT_VERIFIED');
}
module.exports={assess};
