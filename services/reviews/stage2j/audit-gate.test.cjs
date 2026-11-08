'use strict';
const assert=require('node:assert/strict');
const {inspect}=require('./audit-gate.cjs');
const fixture=require('./fictional-audit.json');
const cases=require('./test-vectors.json');
function apply(x,c){if(!c.path)return x;if(c.path==='__whole__')return structuredClone(c.value);const parts=c.path.split('.'),last=parts.pop();let o=x;for(const k of parts)o=o[k];o[last]=structuredClone(c.value);return x;}
let count=0;
for(const c of cases){const r=inspect(apply(structuredClone(fixture),c));assert.equal(r.status,c.status,c.name+' '+JSON.stringify(r));assert.equal(r.reason,c.reason,c.name);assert.equal(r.noncanonical,true,c.name);for(const k of ['cryptography_verified','signature_verified','authority_verified','archive_persisted','write_performed','production_acceptance'])assert.equal(r[k],false,c.name);count++;}
const copy=structuredClone(fixture);inspect(copy);assert.deepEqual(copy,fixture);count++;
const r=inspect(fixture);r.prior[0].ack_id='mutated';assert.equal(fixture.archive.prior[0].ack_id,'fictional:ack-1');count++;
assert.equal(inspect(fixture).status,'CONTEXT_ONLY');count++;
assert.equal(count,50);console.log('PASS '+count+'/'+count+' Stage 2J fictional audit context checks; no cryptography or archive persisted');
