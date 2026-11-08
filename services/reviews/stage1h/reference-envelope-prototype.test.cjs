'use strict';
const assert=require('node:assert/strict');
const {validateEnvelope}=require('./reference-envelope-prototype.cjs');
const sample=require('./fictional-certifier-registry-envelope.json');
const baseline=sample.envelope;
const copy=()=>JSON.parse(JSON.stringify(baseline));
const cases=[
  ["valid fictional envelope","VALID_ENVELOPE_ONLY",x=>x,{"version":true,"lifecycle_state":true,"publication_state":true}],
  ["missing identifier","FAIL",x=>{delete x.identifier;return x},{}],
  ["missing provenance","FAIL",x=>{delete x.provenance;return x},{}],
  ["missing conditional version","FAIL",x=>{delete x.version;return x},{"version":true}],
  ["unknown state stays unknown","UNKNOWN",x=>{x.lifecycle_state="unknown";return x},{}],
  ["unsupported relationship","FAIL",x=>{x.relationship_type="registers";return x},{}],
  ["authority mismatch","FAIL",x=>{x.authority_context="Registry";return x},{}],
  ["missing accessibility","FAIL",x=>{delete x.accessibility;return x},{}],
  ["invalid identifier","FAIL",x=>{x.identifier="SC-CERT-2099-0042!!!";return x},{}],
  ["unrecognized issuer","FAIL",x=>{x.source_institution="Other";x.authority_context="Other";return x},{}],
  ["missing conditional publication","FAIL",x=>{delete x.publication_state;return x},{"publication_state":true}],
  ["lifecycle publication conflation","FAIL",x=>{x.lifecycle_state="published";return x},{}],
  ["unknown relationship explicit","UNKNOWN",x=>{x.relationship_type="unknown";return x},{}],
  ["incorrect provenance shape","FAIL",x=>{x.provenance={};return x},{}],
  ["null root","FAIL",()=>null,{}],
];
for (const [name,expected,mutate,policy] of cases){ const result=validateEnvelope(mutate(copy()),policy);assert.equal(result.status,expected,name);assert.equal(result.noncanonical,true,name+' noncanonical');assert.equal(result.authority_granted,false,name+' authority'); }
console.log('PASS '+cases.length+'/'+cases.length+' fictional normalized-envelope prototype checks; no Suite runtime claims');
