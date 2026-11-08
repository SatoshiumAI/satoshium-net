'use strict';
// Offline prototype: validates ONE normalized exchange envelope, NOT canonical Suite objects or institutional eligibility.
// Semantics source: IQ-001, IDR-018..021; producer/consumer mapping must be explicitly reviewed.
function validateEnvelope(value,policy={}) {
 const errors=[],uncertainties=[];
 const fail=(code,field)=>errors.push({code,field});
 if(!value||typeof value!=="object"||Array.isArray(value))return {status:"FAIL",errors:[{code:"NOT_OBJECT",field:"$"}],uncertainties,noncanonical:true,authority_granted:false};
 const required=["identifier","source_institution","object_type","provenance","relationship_type","authority_context","accessibility"];
 for(const k of required){if(!Object.hasOwn(value,k)||value[k]===null||value[k]==="")fail("MISSING_REQUIRED",k)}
 for(const k of ["version","lifecycle_state","publication_state"]){
  if(policy[k]===true && (!Object.hasOwn(value,k)||value[k]===null||value[k]===""))fail("MISSING_CONDITIONAL",k);
 }
 for(const k of [...required,"version","lifecycle_state","publication_state"]){
  if(value[k]==="unknown")uncertainties.push({code:"EXPLICIT_UNKNOWN",field:k});
 }
 if(typeof value.identifier==="string"&&value.identifier!=="unknown"&&!/^[A-Z][A-Z0-9-]*-[0-9]{4}-[0-9]{4}$/.test(value.identifier))fail("IDENTIFIER_FORMAT", "identifier");
 for(const k of ["source_institution","object_type","authority_context"]){
  if(value[k]!==undefined&&value[k]!==null&&typeof value[k]!=="string")fail("INVALID_TYPE",k);
 }
 if(value.source_institution && value.source_institution!=="unknown" && !["Atlas","Navigator","Certifier","Registry","Chronicle","Anchor","Beacon","Attestor"].includes(value.source_institution)) fail("UNKNOWN_ISSUER","source_institution");
 if(value.relationship_type && value.relationship_type!=="unknown"&&!["references","derived-from","supports","evaluates","results-in","supersedes","corrects","related-to"].includes(value.relationship_type))fail("UNSUPPORTED_PREDICATE","relationship_type");
 if(value.provenance!==undefined && value.provenance!=="unknown"){
  if(!value.provenance||typeof value.provenance!=="object"||Array.isArray(value.provenance)||typeof value.provenance.source_or_origin!=="string"||!value.provenance.source_or_origin.trim())fail("INVALID_PROVENANCE","provenance");
 }
 if(value.accessibility!==undefined && value.accessibility!=="unknown" && !["available","restricted","unavailable"].includes(value.accessibility))fail("UNSUPPORTED_ACCESSIBILITY","accessibility");
 if(typeof value.authority_context==="string" && value.authority_context!=="unknown" && value.source_institution && value.source_institution!=="unknown" && value.authority_context!==value.source_institution)fail("AUTHORITY_MISMATCH","authority_context");
 if(value.lifecycle_state && value.publication_state && value.lifecycle_state!=="unknown"&&value.publication_state!=="unknown" && value.lifecycle_state===value.publication_state)fail("STATE_CONFLATION","lifecycle_state");
 return {status:errors.length?"FAIL":uncertainties.length?"UNKNOWN":"VALID_ENVELOPE_ONLY",errors,uncertainties,noncanonical:true,authority_granted:false};
}
module.exports={validateEnvelope};
