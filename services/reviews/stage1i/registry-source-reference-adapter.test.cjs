'use strict';
const assert=require('node:assert/strict');
const {adaptRegistrySourceReference}=require('./registry-source-reference-adapter.cjs');
const r=require('./fictional-registry-shaped-record.json');
const clone=x=>JSON.parse(JSON.stringify(x));
let count=0;
function check(name,mutate,context,expected,code){
  const result=adaptRegistrySourceReference(mutate(clone(r)),context);
  assert.equal(result.status,expected,name);
  if(code)assert.ok(result.errors.some(x=>x.code===code),name+' must show '+code);
  if(result.envelope){assert.equal(result.noncanonical,true);assert.equal(result.authority_granted,false);assert.equal(result.source_state_claimed,false)}
  count++;
  return result;
}
let good=check('explicit contextual reference',x=>x,{relationship_type:'references',accessibility:'available'},'VALID_ENVELOPE_ONLY');
assert.equal(good.envelope.identifier,'SC-CERT-2099-0042');
assert.equal(good.envelope.version,'1.0');
assert.equal(good.envelope.source_institution,'Certifier');
assert.equal(good.envelope.authority_context,'Certifier');
assert.ok(!Object.hasOwn(good.envelope,'lifecycle_state'));
assert.ok(!Object.hasOwn(good.envelope,'publication_state'));
assert.equal(good.envelope.relationship_type,'references');
check('native registers never silently converted',x=>x,{relationship_type:'registers',accessibility:'available'},'FAIL','UNSUPPORTED_PREDICATE');
check('explicit relationship required',x=>x,{accessibility:'available'},'FAIL','MISSING_EXPLICIT_RELATIONSHIP');
check('accessibility not inferred from Registry publication',x=>x,{relationship_type:'references'},'FAIL','MISSING_EXPLICIT_ACCESSIBILITY');
check('source institution constrained',x=>{x.source_authority.source_institution='Satoshium Registry';return x},{relationship_type:'references',accessibility:'available'},'FAIL','UNSUPPORTED_SOURCE_INSTITUTION');
check('source id family constrained',x=>{x.source_authority.source_system_identifier='SREG-2099-0017';return x},{relationship_type:'references',accessibility:'available'},'FAIL','INVALID_CERTIFIER_ID');
check('source record type must match',x=>{x.source_authority.source_record_type='SREG';return x},{relationship_type:'references',accessibility:'available'},'FAIL','SOURCE_TYPE_MISMATCH');
check('version must be explicit',x=>{delete x.source_authority.source_record_version;return x},{relationship_type:'references',accessibility:'available'},'FAIL','MISSING_VERSION');
check('source authority must be present',x=>{delete x.source_authority;return x},{relationship_type:'references',accessibility:'available'},'FAIL','MISSING_SOURCE_AUTHORITY');
check('no source states borrowed from Registry',x=>x,{relationship_type:'references',accessibility:'available',lifecycle_state:'active'},'FAIL','SOURCE_STATE_NOT_VERIFIED');
check('unknown relationship remains unknown',x=>x,{relationship_type:'unknown',accessibility:'available'},'UNKNOWN');
check('unknown accessibility remains unknown',x=>x,{relationship_type:'references',accessibility:'unknown'},'UNKNOWN');
check('authority statement required',x=>{delete x.source_authority.authority_statement;return x},{relationship_type:'references',accessibility:'available'},'FAIL','MISSING_AUTHORITY_STATEMENT');
console.log('PASS '+count+'/'+count+' fictional Registry-shaped adapter checks; no canonical records modified');
