'use strict';
// Stage 1N: fictional typed-outcome envelope checker, not institutional certification.
// Domains are experimental exchange labels, NOT adopted namespaces.
// Only Attestor evaluation outcomes have a verified, issuer-local controlled vocabulary.
const DOMAINS=Object.freeze({
  'Certifier:certification-outcome':{institution:'Certifier',kind:'certification-outcome'},
  'Certifier:validation-result':{institution:'Certifier',kind:'validation-result'},
  'Anchor:verification-result':{institution:'Anchor',kind:'verification-result'},
  'Registry:validation-result':{institution:'Registry',kind:'validation-result'},
  'Attestor:review-result':{institution:'Attestor',kind:'review-result'},
  'Attestor:evaluation-outcome':{institution:'Attestor',kind:'evaluation-outcome',allowed:new Set(['supported','partially-supported','not-supported','contradicted','indeterminate'])},
  'Attestor:trust-statement-conclusion':{institution:'Attestor',kind:'trust-statement-conclusion'}
});
const good=x=>typeof x==='string'&&x.trim().length>0;
const own=(x,k)=>Object.prototype.hasOwnProperty.call(x,k);
function classifyOutcome(raw){
  const errors=[],unknowns=[];
  const fail=(code,field)=>errors.push({code,field});
  const out=(status,extra={})=>({status,errors,unknowns,authority_granted:false,noncanonical:true,outcome_accepted:false,...extra});
  if(!raw||typeof raw!=='object'||Array.isArray(raw)){fail('INVALID_INPUT','$');return out('REJECTED')}
  if(own(raw,'status')||own(raw,'generic_status'))fail('AMBIGUOUS_GENERIC_STATUS','status');
  for(const field of ['institution','outcome_kind','value','subject_reference','provenance_reference'])if(!good(raw[field]))fail('MISSING_TYPED_FIELD',field);
  if(errors.length)return out('REJECTED',{original:structuredClone(raw)});
  const key=raw.institution+':'+raw.outcome_kind;
  const d=DOMAINS[key];
  if(!d){fail('UNSUPPORTED_NAMESPACE','institution/outcome_kind');return out('REJECTED',{original:structuredClone(raw)})}
  if(raw.value==='unknown'){unknowns.push('value');return out('UNKNOWN',{typed_reference:structuredClone(raw),namespace:key,vocabulary_conformance:'UNKNOWN'})}
  if(d.allowed&&!d.allowed.has(raw.value)){fail('UNSUPPORTED_CONTROLLED_VALUE','value');return out('REJECTED',{original:structuredClone(raw),namespace:key})}
  // Non-Attestor domains are intentionally opaque: lexical validity is not established.
  return out('TYPED_ONLY',{typed_reference:structuredClone(raw),namespace:key,vocabulary_conformance:d.allowed?'ISSUER_LOCAL_VALUE_MATCH':'NOT_VERIFIED'});
}
function compareOutcomes(a,b){
  const x=classifyOutcome(a),y=classifyOutcome(b);
  if(x.status==='REJECTED'||y.status==='REJECTED')return {comparison:'REJECTED',left:x,right:y};
  if(x.status==='UNKNOWN'||y.status==='UNKNOWN')return {comparison:'UNKNOWN',left:x,right:y};
  if(x.namespace!==y.namespace)return {comparison:'DIFFERENT_AUTHORITY_DOMAIN',left:x,right:y,equivalent:false};
  if(x.typed_reference.value!==y.typed_reference.value)return {comparison:'DIFFERENT_LEXICAL_VALUE',left:x,right:y,equivalent:false};
  return {comparison:'SAME_TYPED_LEXEME_ONLY',left:x,right:y,equivalent:false};
}
module.exports={classifyOutcome,compareOutcomes};
