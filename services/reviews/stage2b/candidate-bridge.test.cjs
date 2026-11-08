'use strict';
const assert=require('node:assert/strict');
const {inspectCandidate}=require('./candidate-bridge.cjs');
const fixture=require('./fictional-source-context.json');
const cases=require('./scenario-manifest.json').scenarios;
function apply(x,c){if(!c.path)return x;const p=c.path.split('.'),last=p.pop();let node=x;for(const k of p)node=node[k];node[last]=structuredClone(c.value);return x}
let count=0;
for(const c of cases){const result=inspectCandidate(apply(structuredClone(fixture),c));assert.equal(result.classification,c.expected,c.id+' '+JSON.stringify(result));assert.equal(result.reason,c.reason,c.id);for(const name of ['noncanonical','production_acceptance'])assert.equal(result[name],name==='noncanonical',c.id);for(const name of ['source_verified','registry_authorized','registry_write_performed','sreg_issued'])assert.equal(result[name],false,c.id);assert.equal(result.institutional_outcome,'NOT_DETERMINED',c.id);count++;}
const unchanged=structuredClone(fixture);inspectCandidate(unchanged);assert.deepEqual(unchanged,fixture);count++;
const response=inspectCandidate(fixture);response.source_reference.identifier='changed';assert.equal(fixture.source.identifier,'SC-CERT-2099-0001');count++;
assert.equal(count,33,'exact count');console.log('PASS '+count+'/'+count+' Stage 2B fictional bridge checks; 13 Stage 2A vectors + '+(count-15)+' negative checks + 2 invariants');
