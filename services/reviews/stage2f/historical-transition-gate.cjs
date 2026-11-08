'use strict';
// Stage 2F synthetic-only. Illustrative lifecycle patterns never confer transition authority.
const evaluate=function evaluate(x){
 const base={noncanonical:true,transition_authorized:false,registry_written:false,source_modified:false,publication_authorized:false,production_acceptance:false};
 const emit=(classification,reason,extra={})=>({...base,classification,reason,...extra});
 const obj=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
 const str=v=>typeof v==='string'&&v.trim().length>0;
 if(!obj(x)||!obj(x.entry)||!obj(x.request)||!obj(x.governance)||!Array.isArray(x.history))return emit('REJECTED','INVALID_ENVELOPE');
 const {entry:e,request:r,governance:g,history:h}=x;
 for(const v of [e.registry_id,e.registry_version,e.source_id,e.source_version,e.registry_status,e.registry_lifecycle,r.reason,r.requested_lifecycle,g.receiving_institution,g.caller,g.rule_ref,g.approval_ref])if(!str(v))return emit('REJECTED','MISSING_ATTRIBUTABLE_CONTEXT');
 if(g.receiving_institution!=='Registry'||g.approved!==true||g.rule_ref==='unapproved')return emit('REJECTED','REGISTRY_AUTHORITY_UNESTABLISHED');
 if(r.source_mutation===true||r.claim_certifier_decision===true)return emit('REJECTED','CROSS_INSTITUTION_SOURCE_MUTATION');
 if(r.requested_status_from_source===true)return emit('REJECTED','STATUS_DOMAIN_COLLAPSE');
 if(r.new_registry_id!==null&&r.new_registry_id!==e.registry_id)return emit('REJECTED','SREG_IDENTIFIER_REPLACEMENT');
 if(r.new_source_version!==null&&r.new_source_version!==e.source_version&&!r.source_attestation_verified)return emit('HOLD_UNKNOWN','SOURCE_VERSION_NOT_ATTESTED');
 if(r.current_source_state==='unknown'||r.current_source_state==='unavailable')return emit('HOLD_UNKNOWN','CURRENT_SOURCE_STATE_UNVERIFIED');
 if(r.requested_lifecycle==='Active'||r.requested_lifecycle==='Pending Registration')return emit('DECISION_REQUIRED','DOCUMENTARY_LIFECYCLE_VOCABULARY_BRIDGE');
 if(!['proposed','under_review','registered','published','updated','superseded','revoked','retired','archived'].includes(r.requested_lifecycle))return emit('REJECTED','LIFECYCLE_CODE_NOT_SCHEMA_ENUMERATED');
 const count=new Set();
 for(const ev of h){
  if(!obj(ev)||!str(ev.event_id)||!str(ev.authority)||!str(ev.event_type)||!str(ev.event_at)||!str(ev.source_or_registry)||!Number.isFinite(Date.parse(ev.event_at)))return emit('REJECTED','HISTORY_EVENT_INCOMPLETE');
  if(count.has(ev.event_id))return emit('REJECTED','DUPLICATE_HISTORY_ID');
  count.add(ev.event_id);
  if(ev.source_or_registry==='source'&&ev.authority!=='Certifier')return emit('REJECTED','SOURCE_HISTORY_AUTHORITY_MISMATCH');
  if(ev.source_or_registry==='registry'&&ev.authority!=='Registry')return emit('REJECTED','REGISTRY_HISTORY_AUTHORITY_MISMATCH');
 }
 if(r.erases_prior_history===true||r.preserve_prior_versions!==true)return emit('REJECTED','NONDESTRUCTIVE_HISTORY_REQUIRED');
 if(r.new_registry_version!==null&&r.new_registry_version===e.registry_version)return emit('REJECTED','REGISTRY_VERSION_NOT_ADVANCED');
 if(r.new_registry_version!==null&&r.new_registry_version===r.new_source_version&&r.auto_equate_versions===true)return emit('REJECTED','VERSION_DOMAIN_COLLAPSE');
 if(!str(r.audit_trace)||!str(r.authority_decision_record))return emit('REJECTED','AUDIT_DECISION_CONTEXT_MISSING');
 if(r.requested_lifecycle===e.registry_lifecycle)return emit('CONTEXT_ONLY','NO_STATE_CHANGE_PROPOSED',{history_events:h.length});
 if(r.transition_rule_verified!==true)return emit('HOLD_GOVERNANCE','TRANSITION_RULE_NOT_VERIFIED',{from:e.registry_lifecycle,to:r.requested_lifecycle,history_events:h.length});
 // Even a claimed verified rule is untrusted; no operation or authorization issued.
 return emit('GOVERNED_VERIFICATION_REQUIRED','DECLARED_RULE_REQUIRES_INDEPENDENT_ATTESTATION',{from:e.registry_lifecycle,to:r.requested_lifecycle,history_events:h.length});
};
module.exports={evaluate};
