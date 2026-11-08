'use strict';
// Stage 2G: fictional historical impact classification only, no external actions.
const assessImpact=function assessImpact(x){
 const out=(classification,reason,more={})=>({classification,reason,noncanonical:true,source_modified:false,registry_modified:false,downstream_modified:false,registry_decision_authorized:false,downstream_action_authorized:false,production_acceptance:false,...more});
 const obj=v=>v!==null&&typeof v==='object'&&!Array.isArray(v),str=v=>typeof v==='string'&&v.trim().length>0;
 if(!obj(x)||!obj(x.source)||!obj(x.registry)||!obj(x.change)||!Array.isArray(x.history)||!Array.isArray(x.downstream))return out("REJECTED","INVALID_TRACE_ENVELOPE");
 const s=x.source,r=x.registry,c=x.change,h=x.history,d=x.downstream;
 if(!str(s.identifier)||!str(s.owner)||!str(s.version_at_registry_use)||!str(r.registry_id)||!str(r.source_id)||!str(r.entry_version)||!str(r.recorded_source_version)||!str(c.event_id)||!str(c.observed_at)||!str(c.observed_version)||!str(c.observed_state)||!str(c.provenance)||!Number.isFinite(Date.parse(c.observed_at)))return out("REJECTED","MISSING_VERSIONED_TRACE_CONTEXT");
 if(s.owner!=="Certifier"||r.owner!=="Registry"||r.source_id!==s.identifier)return out("REJECTED","OWNER_OR_REFERENCE_MISMATCH");
 const ids=new Set(),events=[];
 for(const e of h){
  if(!obj(e)||!str(e.event_id)||!str(e.owner)||!str(e.domain)||!str(e.version)||!str(e.occurred_at)||!Number.isFinite(Date.parse(e.occurred_at)))return out("REJECTED","INVALID_HISTORY_EVENT");
  if(ids.has(e.event_id))return out("REJECTED","DUPLICATE_EVENT_ID");ids.add(e.event_id);
  if((e.domain==="source"&&e.owner!=="Certifier")||(e.domain==="registry"&&e.owner!=="Registry")||!["source","registry"].includes(e.domain))return out("REJECTED","HISTORY_AUTHORITY_MISMATCH");
  events.push({id:e.event_id,owner:e.owner,version:e.version,domain:e.domain});
 }
 if(ids.has(c.event_id))return out("REJECTED","REPEATED_SOURCE_CHANGE_EVENT");
 if(c.owner!=="Certifier")return out("REJECTED","SOURCE_CHANGE_AUTHORITY_MISMATCH");
 if(s.version_at_registry_use!==r.recorded_source_version)return out("REJECTED","AT_USE_VERSION_CONFLICT");
 if(!h.some(e=>e.domain==="registry"&&e.version===r.entry_version))return out("REJECTED","REGISTRY_HISTORY_VERSION_UNSUPPORTED");
 if(!h.some(e=>e.domain==="source"&&e.version===s.version_at_registry_use))return out("REJECTED","SOURCE_AT_USE_HISTORY_UNSUPPORTED");
 if(c.rewrite_history===true||c.override_registry_status===true||c.override_downstream_conclusions===true)return out("REJECTED","FORBIDDEN_AUTHORITY_PROPAGATION");
 if(c.observed_state==="unknown"||c.observed_state==="unavailable"||c.provenance==="unverified")return out("HOLD_UNKNOWN","CURRENT_SOURCE_NOT_VERIFIED",{historical_registry_version:r.entry_version,historical_source_version:s.version_at_registry_use});
 const trace=[];
 const allowedOwners=new Set(["Registry","Chronicle","Beacon","Attestor","Anchor"]);
 for(const ref of d){
  if(!obj(ref)||!str(ref.reference_id)||!str(ref.owner)||!str(ref.source_identifier)||!str(ref.source_version_at_use)||!str(ref.relationship)||!str(ref.disposition))return out("REJECTED","DOWNSTREAM_REFERENCE_INCOMPLETE");
  if(!allowedOwners.has(ref.owner)||ref.source_identifier!==s.identifier)return out("REJECTED","DOWNSTREAM_OWNER_OR_SOURCE_MISMATCH");
  if(!["preserved","review-needed","unknown"].includes(ref.disposition))return out("REJECTED","DOWNSTREAM_DISPOSITION_UNSUPPORTED");
  if(ref.disposition==="preserved"&&ref.automatic_update===true)return out("REJECTED","AUTOMATIC_DOWNSTREAM_MUTATION");
  trace.push({reference_id:ref.reference_id,owner:ref.owner,source_version_at_use:ref.source_version_at_use,action:"REVIEW_OWNER_CONTROLLED",historical_version_preserved:true});
 }
 if(new Set(d.map(ref=>ref.reference_id)).size!==d.length)return out("REJECTED","DUPLICATE_DOWNSTREAM_REFERENCE");
 if(c.observed_version===s.version_at_registry_use&&c.observed_state==="unchanged")return out("CONTEXT_ONLY","NO_NEW_SOURCE_VERSION",{source_event:c.event_id,history:events,review_destinations:trace});
 return out("SOURCE_CHANGE_REVIEW_REQUIRED","NO_AUTOMATIC_INSTITUTIONAL_ACTION",{source_event:c.event_id,prior_source_version:s.version_at_registry_use,observed_source_version:c.observed_version,registry_entry_version:r.entry_version,history:events,review_destinations:trace});
};
module.exports={assessImpact};
