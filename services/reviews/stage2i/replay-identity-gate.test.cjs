'use strict';
const assert=require('node:assert/strict');
const {analyzeBatch}=require('./replay-identity-gate.cjs');
const fixture=require('./fictional-replay.json');
const cases=require('./test-vectors.json');
function apply(x,c){if(c.path===null)return x;const parts=c.path.split('.'),last=parts.pop();let o=x;for(const k of parts)o=o[k];o[last]=structuredClone(c.value);return x;}
let n=0;
for(const c of cases){const r=analyzeBatch(apply(structuredClone(fixture),c));assert.equal(r.status,c.status,c.name+' '+JSON.stringify(r));assert.equal(r.reason,c.reason,c.name);assert.equal(r.noncanonical,true,c.name);for(const k of ['authenticated','delivered','institutional_write','approved','production_accepted','history_persisted'])assert.equal(r[k],false,c.name);n++;}
const before=structuredClone(fixture);analyzeBatch(before);assert.deepEqual(before,fixture);n++;
const alt=structuredClone(fixture);alt.incoming.disposition='unknown';assert.equal(analyzeBatch(alt).status,'HOLD_UNKNOWN');assert.equal(analyzeBatch(fixture).status,'NEW_CONTEXT_REVIEW_REQUIRED');n++;
assert.equal(analyzeBatch({...fixture,incoming:structuredClone(fixture.prior[0])}).status,'REPLAY_CONTEXT_ONLY');n++;
assert.equal(n,46,'exact test total');
console.log('PASS '+n+'/'+n+' Stage 2I fictional acknowledgement replay checks; no delivery or authority');
