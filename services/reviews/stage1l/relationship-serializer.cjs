'use strict';
// Experimental, fictional IQ-004 exchange envelope validation. Never canonical authority.
const PREDICATES = new Set(['references','derived-from','supports','evaluates','results-in','supersedes','corrects','related-to']);
const INSTITUTIONS = new Set(['Atlas','Navigator','Certifier','Registry','Chronicle','Anchor','Beacon','Attestor']);
const DIRECTIONS = new Set(['subject-to-object']);
const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
function checkOne(raw, policy={}) {
  const errors=[];
  const err=(code,field)=>errors.push({code,field});
  if(!raw || typeof raw!=='object'||Array.isArray(raw))return {status:'REJECTED',errors:[{code:'INVALID_RELATIONSHIP',field:'$'}],original:raw??null};
  const base=['subject_identifier','relationship_type','object_identifier','subject_institution','object_institution','direction','relationship_provenance','authority_context'];
  for(const field of base)if(!own(raw,field)||raw[field]===null||raw[field]==='')err('MISSING_FIELD',field);
  for(const field of ['effective_time','version_scope','relationship_state']){
    if(policy[field]===true && (!own(raw,field)||raw[field]===null||raw[field]===''))err('MISSING_CONDITIONAL',field);
  }
  for(const f of ['subject_identifier','object_identifier','subject_institution','object_institution','relationship_type','direction','authority_context']){
    if(own(raw,f)&&(typeof raw[f]!=='string'||!raw[f].trim()))err('INVALID_TYPE',f);
  }
  if(typeof raw.subject_institution==='string'&&!INSTITUTIONS.has(raw.subject_institution))err('UNKNOWN_INSTITUTION','subject_institution');
  if(typeof raw.object_institution==='string'&&!INSTITUTIONS.has(raw.object_institution))err('UNKNOWN_INSTITUTION','object_institution');
  if(typeof raw.relationship_type==='string'&&!PREDICATES.has(raw.relationship_type))err('UNSUPPORTED_PREDICATE','relationship_type');
  if(typeof raw.direction==='string'&&!DIRECTIONS.has(raw.direction))err('INVALID_DIRECTION','direction');
  const prov=raw.relationship_provenance;
  if(prov!==undefined&&(!prov||typeof prov!=='object'||Array.isArray(prov)||typeof prov.basis!=='string'||!prov.basis.trim()))err('INVALID_PROVENANCE','relationship_provenance');
  const ctx=raw.authority_context;
  if(ctx!==undefined&&typeof ctx==='string'&&ctx!=='unknown'&&ctx!==raw.subject_institution)err('AUTHORITY_MISMATCH','authority_context');
  for(const f of ['effective_time','version_scope','relationship_state'])if(own(raw,f)&&raw[f]!==null&&raw[f]!==''&&typeof raw[f]!=='string'&&typeof raw[f]!=='object')err('INVALID_CONDITIONAL_TYPE',f);
  if(raw.relationship_type==='related-to'&&policy.requires_explicit_weak_relationship_reason===true && (typeof raw.weak_relationship_reason!=='string'||!raw.weak_relationship_reason.trim()))err('MISSING_WEAK_REASON','weak_relationship_reason');
  if(errors.length)return {status:'REJECTED',errors,original:structuredClone(raw)};
  return {status:'SERIALIZED_ONLY',relationship:structuredClone(raw),noncanonical:true,authority_granted:false,evidence_verified:false};
}
function serializeRelationships(list,policy={}){
  if(!Array.isArray(list))return {status:'REJECTED',items:[],rejected:[{index:null,errors:[{code:'NOT_ARRAY',field:'$'}],original:list??null}],noncanonical:true,authority_granted:false};
  const items=[],rejected=[];
  list.forEach((raw,index)=>{const r=checkOne(raw,policy);if(r.status==='REJECTED')rejected.push({index,errors:r.errors,original:r.original});else items.push({index,...r});});
  return {status:rejected.length?'REJECTED': 'SERIALIZED_ONLY',items,rejected,noncanonical:true,authority_granted:false};
}
module.exports={checkOne,serializeRelationships};
