'use strict';
const assert=require('node:assert/strict');
const {inspectAcknowledgements}=require('./acknowledgement-gate.cjs');
const fixture=require('./fictional-acknowledgements.json');
const cases=require('./test-vectors.json');
function apply(x,c){if(c.path===null)return x;if(c.path==='__root__')return null;const p=c.path.split('.'),key=p.pop();let node=x;for(const k of p)node=node[k];node[key]=structuredClone(c.value);return x;}
let n=0;
for(const c of cases){const r=inspectAcknowledgements(apply(structuredClone(fixture),c));assert.equal(r.classification,c.classification,c.name+' '+JSON.stringify(r));assert.equal(r.reason,c.reason,c.name);for(const key of ['delivery_performed','authenticated','owner_decision_verified','institutional_write_performed','source_modified','production_acceptance'])assert.equal(r[key],false,c.name);assert.equal(r.noncanonical,true,c.name);n++;}
const before=structuredClone(fixture);inspectAcknowledgements(before);assert.deepEqual(before,fixture);n++;
const res=inspectAcknowledgements(fixture);res.review_destinations[0].owner='other';assert.equal(fixture.targets[0].owner,'Registry');n++;
assert.equal(inspectAcknowledgements(fixture).review_destinations.length,6);n++;
assert.equal(n,39,'exact total');
console.log('PASS '+n+'/'+n+' Stage 2H fictional owner acknowledgement checks; no messages delivered or approvals');
