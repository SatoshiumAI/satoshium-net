'use strict';
// Pinned fictional conformance inspector. No I/O, writes or institutional authorization.
const inspect=function inspect(input,spec){
 const out=(classification,reason,extra={})=>({classification,reason,noncanonical:true,authority_granted:false,registry_write_performed:false,publication_authorized:false,production_acceptance:false,source_status_promoted:false,...extra});
 const obj=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
 if(!obj(input)||!obj(spec)||!obj(spec.schema)||!obj(spec.published_controlled_values))return out("REJECTED","INVALID_INPUT_OR_SPEC");
 if(!["registry_status","registry_lifecycle_state"].includes(input.domain))return out("REJECTED","UNRECOGNIZED_DOMAIN");
 if(!obj(input.value)||typeof input.value.code!=="string"||typeof input.value.label!=="string")return out("REJECTED","INVALID_CODE_LABEL");
 if(input.source_domain!==input.domain)return out("REJECTED","CROSS_DOMAIN_MAPPING_FORBIDDEN");
 if(input.requested_transition===true||input.requested_publication===true)return out("HOLD_GOVERNANCE","NO_TRANSITION_OR_PUBLICATION_AUTHORITY");
 const entry=spec.schema[input.domain];
 if(!obj(entry)||!Array.isArray(entry.codes)||!Array.isArray(entry.labels)||entry.codes.length!==entry.labels.length)return out("REJECTED","SCHEMA_SNAPSHOT_INVALID");
 const idx=entry.codes.indexOf(input.value.code);
 if(idx<0||!entry.labels.includes(input.value.label))return out("REJECTED","NOT_SCHEMA_ENUMERATED");
 if(entry.labels[idx]!==input.value.label)return out("REJECTED","CODE_LABEL_MISMATCH");
 const set=spec.published_controlled_values.value_sets[input.domain];
 if(!Array.isArray(set))return out("SCHEMA_ONLY","MACHINE_VALUE_SET_NOT_PUBLISHED",{schema_code_valid:true,schema_pair_valid:true,machine_set_published:false});
 if(!set.some(x=>x.code===input.value.code&&x.label===input.value.label))return out("SCHEMA_ONLY","VALUE_NOT_IN_PUBLISHED_MACHINE_SET",{schema_code_valid:true,schema_pair_valid:true,machine_set_published:true});
 return out("MACHINE_VALUE_RECOGNIZED","VALUE_PRESENT_IN_PUBLISHED_SET",{schema_code_valid:true,schema_pair_valid:true,machine_set_published:true});
};
module.exports={inspect};
