'use strict';
// Stage 2I is a fictional replay-context inspector. It cannot deliver, approve or write.
const analyzeBatch=function analyzeBatch(p){
 const basic={noncanonical:true,authenticated:false,delivered:false,institutional_write:false,approved:false,production_accepted:false,history_persisted:false};
 const ret=(status,reason,extra={})=>({...basic,status,reason,...extra});
 const obj=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
 const str=x=>typeof x==="string"&&x.trim().length>0;
 const time=x=>str(x)&&/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:Z|[+-]\d\d:\d\d)$/.test(x)&&Number.isFinite(Date.parse(x));
 if(!obj(p)||!obj(p.source)||!obj(p.target)||!Array.isArray(p.prior)||!obj(p.incoming))return ret("REJECTED","INVALID_ENVELOPE");
 const s=p.source,t=p.target,a=p.incoming;
 if(![s.event_id,s.identifier,s.owner,s.version_at_use,s.observed_version,t.reference_id,t.owner,t.object_type,t.source_identifier,t.version_at_use].every(str))return ret("REJECTED","MISSING_REFERENCE_CONTEXT");
 if(s.owner!=="Certifier"||s.identifier!==t.source_identifier||s.version_at_use!==t.version_at_use)return ret("REJECTED","SOURCE_REFERENCE_MISMATCH");
 if(({SREG:"Registry",CHR:"Chronicle",ANCH:"Anchor",BEAC:"Beacon",ATT:"Attestor",TRST:"Attestor"})[t.object_type]!==t.owner)return ret("REJECTED","TARGET_OWNER_MISMATCH");
 const ackok=x=>obj(x)&&[x.ack_id,x.reference_id,x.owner,x.source_event_id,x.source_version_at_use,x.disposition,x.audit_ref,x.correlation_id,x.attempt_id].every(str)&&time(x.observed_at)&&Number.isInteger(x.attempt_sequence)&&x.attempt_sequence>=1;
 if(!ackok(a))return ret("REJECTED","INCOMPLETE_ACK_CONTEXT");
 if(a.reference_id!==t.reference_id||a.owner!==t.owner||a.source_event_id!==s.event_id)return ret("REJECTED","ACK_IDENTITY_OR_ROUTING_CONFLICT");
 if(a.source_version_at_use!==t.version_at_use)return ret("HOLD_REVIEW","ACK_VERSION_AT_USE_CONFLICT");
 const allowed=["receipt","review-pending","deferred","rejected","unknown"];
 if(!allowed.includes(a.disposition))return ret("REJECTED","UNSUPPORTED_ACK_DISPOSITION");
 if(a.approved!==false||a.canonical_write!==false||a.resulting_conclusion!==null||a.source_mutation!==false)return ret("REJECTED","ACK_ASSERTS_INSTITUTIONAL_ACTION");
 const ids=new Set(),attempts=new Set();
 for(const q of p.prior){
  if(!ackok(q))return ret("REJECTED","INVALID_HISTORICAL_ACK");
  if(ids.has(q.ack_id))return ret("REJECTED","DUPLICATE_HISTORICAL_ACK_ID");ids.add(q.ack_id);
  if(q.reference_id!==t.reference_id||q.owner!==t.owner||q.source_event_id!==s.event_id||q.source_version_at_use!==t.version_at_use||q.correlation_id!==a.correlation_id)return ret("REJECTED","HISTORY_LINEAGE_CONFLICT");
  if(q.approved!==false||q.canonical_write!==false||q.resulting_conclusion!==null||q.source_mutation!==false)return ret("REJECTED","HISTORY_ASSERTS_OPERATION");
  if(!allowed.includes(q.disposition))return ret("REJECTED","INVALID_HISTORICAL_DISPOSITION");
  if(attempts.has(q.attempt_id))return ret("REJECTED","DUPLICATE_HISTORICAL_ATTEMPT");
  attempts.add(q.attempt_id);
 }
 if(a.correlation_id!==p.correlation_id||!str(p.correlation_id))return ret("REJECTED","CORRELATION_CONFLICT");
 const same=p.prior.find(q=>q.ack_id===a.ack_id);
 if(same)return JSON.stringify(same)===JSON.stringify(a)?ret("REPLAY_CONTEXT_ONLY","EXACT_ACK_REPLAY",{prior_count:p.prior.length}):ret("REJECTED","CONFLICTING_ACK_ID");
 if(attempts.has(a.attempt_id))return ret("REJECTED","ATTEMPT_REUSED_WITH_NEW_ACK");
 const max=p.prior.reduce((m,q)=>Math.max(m,q.attempt_sequence),0);
 if(a.attempt_sequence<=max)return ret("STALE_CONTEXT","OLDER_OR_NONMONOTONIC_ATTEMPT",{max_previous_sequence:max});
 const latest=p.prior.reduce((m,q)=>!m||Date.parse(q.observed_at)>Date.parse(m.observed_at)?q:m,null);
 if(latest&&Date.parse(a.observed_at)<Date.parse(latest.observed_at))return ret("STALE_CONTEXT","DELAYED_OBSERVATION");
 if(s.observed_version!==s.version_at_use||["unknown","unavailable"].includes(s.current_state))return ret("HOLD_REVIEW","SOURCE_CURRENTNESS_UNVERIFIED");
 if(a.disposition==="unknown")return ret("HOLD_UNKNOWN","OWNER_ACK_UNKNOWN");
 return ret("NEW_CONTEXT_REVIEW_REQUIRED","UNVERIFIED_OWNER_RESPONSE",{prior_count:p.prior.length});
};
module.exports={analyzeBatch};
