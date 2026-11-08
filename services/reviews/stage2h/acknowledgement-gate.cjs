'use strict';
// Stage 2H fictional-only acknowledgement context inspector; NO delivery or authority.
const inspectAcknowledgements=function inspectAcknowledgements(input){
 const base={noncanonical:true,delivery_performed:false,authenticated:false,owner_decision_verified:false,institutional_write_performed:false,source_modified:false,production_acceptance:false};
 const out=(classification,reason,extra={})=>({...base,classification,reason,...extra});
 const object=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
 const text=x=>typeof x==="string"&&x.trim().length>0;
 if(!object(input)||!object(input.source_event)||!Array.isArray(input.targets)||!Array.isArray(input.acknowledgements))return out("REJECTED","INVALID_ENVELOPE");
 const e=input.source_event;
 if(!text(e.event_id)||!text(e.owner)||!text(e.source_identifier)||!text(e.version_at_use)||!text(e.observed_version)||!text(e.observation_time)||!text(e.provenance)||!Number.isFinite(Date.parse(e.observation_time)))return out("REJECTED","SOURCE_EVENT_INCOMPLETE");
 if(e.owner!=="Certifier")return out("REJECTED","SOURCE_OWNER_MISMATCH");
 if(e.provenance==="unverified"||e.observed_state==="unknown"||e.observed_state==="unavailable")return out("HOLD_UNKNOWN","SOURCE_OBSERVATION_UNVERIFIED");
 if(e.override_downstream===true||e.override_certifier_conclusion===true)return out("REJECTED","FORBIDDEN_SOURCE_TO_OWNER_ESCALATION");
 const known={Registry:["SREG"],Chronicle:["CHR"],Anchor:["ANCH"],Beacon:["BEAC"],Attestor:["ATT","TRST"]};
 const seenTargets=new Set(),seenAcks=new Set(),reviews=[];
 for(const t of input.targets){
  if(!object(t)||!text(t.reference_id)||!text(t.owner)||!text(t.source_identifier)||!text(t.source_version_at_use)||!text(t.object_type))return out("REJECTED","TARGET_INCOMPLETE");
  if(!Array.isArray(known[t.owner])||!known[t.owner].includes(t.object_type)||t.source_identifier!==e.source_identifier)return out("REJECTED","TARGET_OWNER_OR_SOURCE_CONFLICT");
  if(seenTargets.has(t.reference_id))return out("REJECTED","DUPLICATE_TARGET");
  seenTargets.add(t.reference_id);
  reviews.push({reference_id:t.reference_id,owner:t.owner,version_at_use:t.source_version_at_use,request_kind:"OWNER_REVIEW_ONLY"});
 }
 for(const a of input.acknowledgements){
  if(!object(a)||!text(a.ack_id)||!text(a.reference_id)||!text(a.owner)||!text(a.source_event_id)||!text(a.disposition)||!text(a.observed_at)||!text(a.audit_ref)||!Number.isFinite(Date.parse(a.observed_at)))return out("REJECTED","ACK_INCOMPLETE");
  if(seenAcks.has(a.ack_id))return out("REJECTED","DUPLICATE_ACK_ID");seenAcks.add(a.ack_id);
  const target=input.targets.find(t=>t.reference_id===a.reference_id);
  if(!target||target.owner!==a.owner||a.source_event_id!==e.event_id)return out("REJECTED","ACK_ROUTING_OR_EVENT_MISMATCH");
  if(!["receipt","review-pending","deferred","rejected","unknown"].includes(a.disposition))return out("REJECTED","ACK_DISPOSITION_NOT_ALLOWED");
  if(a.approved===true||a.updated_object===true||a.canonical_write===true||a.resulting_conclusion!==null)return out("REJECTED","ACK_MUST_NOT_CLAIM_INSTITUTIONAL_RESULT");
  if(a.requested_source_rewrite===true)return out("REJECTED","ACK_CANNOT_REWRITE_SOURCE");
 }
 if(e.observed_version!==e.version_at_use&&input.targets.some(t=>t.source_version_at_use!==e.version_at_use))return out("HOLD_REVIEW","REFERENCE_AT_USE_VERSION_CONFLICT",{review_destinations:reviews});
 if(input.acknowledgements.length===0)return out("REVIEW_PENDING","NO_ACKNOWLEDGEMENTS",{review_destinations:reviews,acknowledged_count:0});
 const acks=input.acknowledgements.map(a=>({ack_id:a.ack_id,owner:a.owner,reference_id:a.reference_id,disposition:a.disposition,independently_verified:false}));
 if(acks.some(a=>a.disposition==="unknown"))return out("HOLD_UNKNOWN","ACKNOWLEDGEMENT_STATE_UNKNOWN",{acknowledgements:acks,review_destinations:reviews});
 return out("ACK_CONTEXT_ONLY","ACKNOWLEDGEMENTS_UNVERIFIED",{acknowledgements:acks,review_destinations:reviews,acknowledged_count:acks.length});
};
module.exports={inspectAcknowledgements};
