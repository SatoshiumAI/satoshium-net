'use strict';
const assert=require('node:assert/strict');
const {assess}=require('./recovery-gate.cjs');
const fixture=require('./fictional-recovery.json');
const cases=require('./test-vectors.json');
function apply(x,c){if(c.path===null)return x;const p=c.path.split('.');let v=x;for(const k of p.slice(0,-1))v=v[k];v[p[p.length-1]]=structuredClone(c.value);return x}
let n=0;
for(const c of cases){const r=assess(apply(structuredClone(fixture),c));assert.equal(r.classification,c.classification,c.name+' '+JSON.stringify(r));assert.equal(r.reason,c.reason,c.name);assert.equal(r.noncanonical,true,c.name);for(const k of ['accepted','authenticated','durable','authority_verified','write_performed','production_acceptance'])assert.equal(r[k],false,c.name);n++;}
const original=structuredClone(fixture);assess(original);assert.deepEqual(original,fixture);n++;
const out=assess(fixture);out.required[0]='mutated';assert.equal(assess(fixture).required[0],'canonical_bytes');n++;
assert.equal(assess(fixture).classification,'EVIDENCE_PACKAGE_REVIEW');n++;
assert.equal(n,49);console.log('PASS '+n+'/'+n+' Stage 2K fictional governed audit recovery checks; no production acceptance');
