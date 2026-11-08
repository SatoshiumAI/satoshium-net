'use strict';
const assert=require('node:assert/strict');
const {evaluate}=require('./historical-transition-gate.cjs');
const fixture=require('./fictional-history.json');
const cases=require('./test-vectors.json');
function apply(x,c){if(c.path===null)return x;const keys=c.path.split('.'),last=keys.pop();let v=x;for(const k of keys)v=v[k];v[last]=structuredClone(c.value);return x}
let count=0;
for(const c of cases){const r=evaluate(apply(structuredClone(fixture),c));assert.equal(r.classification,c.classification,c.id+' '+JSON.stringify(r));assert.equal(r.reason,c.reason,c.id);for(const k of ['transition_authorized','registry_written','source_modified','publication_authorized','production_acceptance'])assert.equal(r[k],false,c.id);assert.equal(r.noncanonical,true,c.id);count++}
const before=structuredClone(fixture);evaluate(before);assert.deepEqual(before,fixture);count++;
assert.equal(evaluate(structuredClone(fixture)).history_events,3);count++;
assert.equal(cases.filter(x=>x.id.startsWith('F-')).length,32);count++;
assert.equal(count,35,'exact test count');
console.log('PASS '+count+'/'+count+' Stage 2F fictional historical-transition checks; no transition authorized');
