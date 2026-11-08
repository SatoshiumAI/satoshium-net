'use strict';
const assert=require('node:assert/strict');
const {inspect}=require('./value-inspector.cjs');
const snapshot=require('./pinned-machine-snapshot.json');
const cases=require('./test-vectors.json');
const base={domain:"registry_status",source_domain:"registry_status",value:{code:"active",label:"Active"},requested_transition:false,requested_publication:false};
let n=0;
for(const c of cases){
 const r=inspect({...structuredClone(base),...structuredClone(c.mutate)},snapshot);
 assert.equal(r.classification,c.classification,c.id+' '+JSON.stringify(r));
 assert.equal(r.reason,c.reason,c.id);
 for(const k of ['authority_granted','registry_write_performed','publication_authorized','production_acceptance','source_status_promoted'])assert.equal(r[k],false,c.id);
 assert.equal(r.noncanonical,true,c.id);n++;
}
const previous=structuredClone(snapshot);inspect(base,snapshot);assert.deepEqual(snapshot,previous);n++;
assert.equal(inspect({domain:'registry_status',source_domain:'registry_status',value:snapshot.historical_sreg.registry_status},snapshot).classification,'MACHINE_VALUE_RECOGNIZED');
assert.equal(inspect({domain:'registry_lifecycle_state',source_domain:'registry_lifecycle_state',value:snapshot.historical_sreg.registry_lifecycle_state},snapshot).classification,'SCHEMA_ONLY');n++;
const copied=structuredClone(snapshot);copied.schema.registry_status.codes[1]='edited';assert.equal(snapshot.schema.registry_status.codes[1],'active');n++;
assert.equal(n,28);
console.log('PASS '+n+'/'+n+' Stage 2E source-pinned conformance checks; no Registry action');
