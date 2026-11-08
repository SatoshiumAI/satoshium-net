'use strict';
const assert=require('node:assert/strict');
const {classifyFailure,guardPromotion,TYPES}=require('./failure-classifier.cjs');
const fixture=require('./fictional-failure.json');
const copy=x=>structuredClone(x);
let n=0;
function check(name,mutate,expected,code){
 const r=classifyFailure(mutate(copy(fixture)));
 assert.equal(r.classification,expected,name);
 assert.equal(r.authority_granted,false,name);
 assert.equal(r.noncanonical,true,name);
 assert.equal(r.institutional_outcome,'NOT_DETERMINED',name);
 assert.equal(r.retry_executed,false,name);
 assert.equal(r.canonical_write_performed,false,name);
 if(code)assert.ok(r.errors.some(e=>e.code===code),name+' expected '+code+' '+JSON.stringify(r.errors));
 if(expected==='UNRESOLVED_CONDITION'){
  assert.equal(r.current_state,'unknown',name);
  assert.equal(r.current_version,'unknown',name);
  assert.equal(r.retry_authorized,false,name);
  assert.equal(r.action,'HOLD_FOR_GOVERNED_DECISION',name);
 }
 n++;return r;
}
let r=check('institution unavailable remains unresolved',x=>x,'UNRESOLVED_CONDITION');
assert.equal(r.last_known.lifecycle_state,'active');
assert.equal(r.retry_class,'TRANSIENT_CANDIDATE');
for(const kind of TYPES){
 const v=check('all failure kinds: '+kind,x=>{
  x.failure_kind=kind;
  if(kind==='contradictory-metadata')x.conflicting_values=[{source:'synthetic-1',value:'active'},{source:'synthetic-2',value:'withdrawn'}];
  if(kind==='partial-response')x.missing_fields=['publication_state'];
  return x;
 },'UNRESOLVED_CONDITION');
 if(kind==='contradictory-metadata')assert.equal(v.conflicting_values.length,2);
}
check('missing identifier',x=>{delete x.identifier;return x},'REJECTED','MISSING_CONTEXT');
check('missing source institution',x=>{delete x.source_institution;return x},'REJECTED','MISSING_CONTEXT');
check('missing stage',x=>{delete x.stage;return x},'REJECTED','MISSING_CONTEXT');
check('missing timestamp',x=>{delete x.observed_at;return x},'REJECTED','MISSING_CONTEXT');
check('missing pinned version',x=>{delete x.input_version_at_use;return x},'REJECTED','MISSING_CONTEXT');
check('missing evidence',x=>{delete x.evidence;return x},'REJECTED','MISSING_EVIDENCE');
check('bad evidence',x=>{x.evidence=[{source:'',observation:'bad'}];return x},'REJECTED','INVALID_EVIDENCE');
check('unsupported failure token',x=>{x.failure_kind='passed';return x},'REJECTED','UNKNOWN_FAILURE_TOKEN');
check('contradiction requires multiple values',x=>{x.failure_kind='contradictory-metadata';return x},'REJECTED','CONFLICT_VALUES_REQUIRED');
check('partial response needs missing fields',x=>{x.failure_kind='partial-response';return x},'REJECTED','PARTIAL_FIELDS_REQUIRED');
check('bad retry count',x=>{x.retry_attempts=-1;return x},'REJECTED','BAD_ATTEMPT_COUNT');
check('null root',()=>null,'REJECTED','INVALID_INPUT');
check('array root',()=>[],'REJECTED','INVALID_INPUT');
check('last-known never current',x=>{x.last_known={lifecycle_state:'active',version:'1.2'};return x},'UNRESOLVED_CONDITION');
check('version pin remains unchanged',x=>{x.input_version_at_use='0.8';return x},'UNRESOLVED_CONDITION');
const a=copy(fixture);classifyFailure(a);assert.deepEqual(a,fixture);n++;
for(const claimed of ['PASS','VALID','SUPPORTED','TRUSTED','CURRENT','success','active','published']){
 const p=guardPromotion('UNRESOLVED_CONDITION',claimed);
 assert.equal(p.allowed,false);assert.equal(p.reason,'PROHIBITED_FAVORABLE_PROMOTION');
 n++;
}
assert.equal(guardPromotion('UNRESOLVED_CONDITION','unknown').allowed,false);n++;
assert.equal(guardPromotion('REJECTED','PASS').allowed,false);n++;
assert.equal(n,41,'verify explicit number of cases');
console.log('PASS '+n+'/'+n+' synthetic IQ-007 failure/unknown checks; no real institutional operations');
