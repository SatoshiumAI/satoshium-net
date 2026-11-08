'use strict';
// Stage 1J experimental resolver: in-memory fictional catalog ONLY.
// No network I/O, canonical lookup, institutional approval or production write.
function resolveReference(catalog,request){
  const out=(status,identifier,detail={})=>({resolution_status:status,identifier,source_verified:false,authority_granted:false,noncanonical:true,...detail});
  if(!request||typeof request!=='object'||Array.isArray(request)||typeof request.identifier!=='string'||!request.identifier.trim())
    return out('unresolved',typeof request?.identifier==='string'?request.identifier:null,{reason:'missing-or-invalid-request-identifier'});
  const identifier=request.identifier;
  if(!catalog||!Array.isArray(catalog.records))return out('unresolved',identifier,{reason:'catalog-unavailable'});
  // Exact full native identifier; no substring, suffix, case folding or guessed aliases.
  const matches=catalog.records.filter(r=>r&&r.identifier===identifier);
  if(matches.length!==1)return out('unresolved',identifier,{reason:matches.length?'ambiguous-identifier':'identifier-not-in-fixture-catalog'});
  const rec=matches[0];
  if(typeof request.source_institution==='string'&&request.source_institution!==rec.source_institution)return out('unresolved',identifier,{reason:'institution-mismatch'});
  if(typeof request.object_type==='string'&&request.object_type!==rec.object_type)return out('unresolved',identifier,{reason:'object-type-mismatch'});
  const base={source_institution:rec.source_institution,object_type:rec.object_type};
  const historical=Array.isArray(rec.history)?rec.history:[];
  const hist=typeof request.version_at_use==='string'?historical.find(x=>x.version===request.version_at_use):null;
  const historical_at_use=hist?{version_at_use:hist.version,state_at_use:hist.lifecycle_state,publication_state_at_use:hist.publication_state,recorded_at:hist.recorded_at}:null;
  const cur=rec.current;
  if(!cur||cur.availability==='unavailable')return out('unavailable',identifier,{...base,current_state:'unknown',current_version:'unknown',last_known:rec.last_known||null,historical_at_use,reason:'source-not-currently-observable'});
  if(cur.availability==='broken-reference')return out('broken-reference',identifier,{...base,current_state:'unknown',current_version:'unknown',last_known:rec.last_known||null,historical_at_use,reason:'recorded-reference-unusable'});
  if(cur.availability!=='available')return out('unresolved',identifier,{...base,reason:'unsupported-availability'});
  if(typeof cur.version!=='string'||!cur.version.trim()||typeof cur.lifecycle_state!=='string'||!cur.lifecycle_state.trim())return out('unresolved',identifier,{...base,reason:'incomplete-source-state'});
  const state={...base,current_version:cur.version,current_state:cur.lifecycle_state,current_publication_state:cur.publication_state??'unknown',historical_at_use};
  if(cur.lifecycle_state==='superseded')return out('superseded',identifier,{...state,successor_identifier:cur.successor_identifier||null});
  if(cur.lifecycle_state==='withdrawn')return out('withdrawn',identifier,state);
  if(request.version_at_use&&request.version_at_use!==cur.version)return out('stale',identifier,{...state,requested_version:request.version_at_use,reason:hist?'historical-version-known':'requested-version-not-confirmed'});
  return out('resolved',identifier,state);
}
module.exports={resolveReference};
