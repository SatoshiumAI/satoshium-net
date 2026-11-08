'use strict';
const assert=require('node:assert/strict');
const {assessImpact}=require('./impact-matrix.cjs');
const fixture=require('./fictional-trace.json');
const cases=require('./test-vectors.json');
function apply(x,c){if(c.path===null)return x;const keys=c.path.split('.'),last=keys.pop();let node=x;for(const k of keys)node=node[k];node[last]=structuredClone(c.value);return x;}
let count=0;
for(const c of cases){const result=assessImpact(apply(structuredClone(fixture),c));assert.equal(result.classification,c.classification,c.name+' '+JSON.stringify(result));assert.equal(result.reason,c.reason,c.name);assert.equal(result.noncanonical,true,c.name);for(const k of ['source_modified','registry_modified','downstream_modified','registry_decision_authorized','downstream_action_authorized','production_acceptance'])assert.equal(result[k],false,c.name);count++;}
const before=structuredClone(fixture);assessImpact(before);assert.deepEqual(before,fixture);count++;
const result=assessImpact(fixture);result.review_destinations[0].owner='modified';assert.equal(fixture.downstream[0].owner,'Chronicle');count++;
assert.equal(assessImpact(fixture).review_destinations.length,3);count++;
assert.equal(count,39,'test count');
console.log('PASS '+count+'/'+count+' Stage 2G fictional trace and source impact checks; no institutional writes');
