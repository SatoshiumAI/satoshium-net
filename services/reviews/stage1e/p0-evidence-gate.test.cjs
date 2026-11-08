#!/usr/bin/env node
'use strict';
const assert = require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {validate}=require('./p0-evidence-gate.cjs');
const original=JSON.parse(fs.readFileSync(path.join(__dirname,'p0-evidence-manifest.json')));
const fresh=()=>structuredClone(original);
assert.equal(validate(fresh()).ok,true,'Baseline evidence register must be valid');
function reject(m,code){const v=validate(m);assert.equal(v.ok,false,`Expected invalid: ${code}`);assert.ok(v.errors.some(x=>x.code===code),`Missing error ${code}: ${JSON.stringify(v.errors)}`)}
let m=fresh();m.workstreams.pop();reject(m,'COUNT');
m=fresh();m.workstreams[1].local_id=m.workstreams[0].local_id;reject(m,'DUPLICATE_LOCAL_ID');
m=fresh();m.workstreams[0].verification_status='ACCEPTED';reject(m,'UNSUPPORTED_ACCEPTANCE');
m=fresh();m.workstreams[0].verification_status='TESTED_WITH_LIMITS';reject(m,'TEST_STATUS_NO_TEST');
m=fresh();m.workstreams[0].official_queue_source_sha256=null;reject(m,'OFFICIAL_ID_NEEDS_PROVENANCE');
m=fresh();m.workstreams[0].verification_status='SOURCE_ONLY';reject(m,'SOURCE_STATUS_NO_SOURCE');
m=fresh();m.workstreams[0].evidence.push({kind:'BROWSER',source_uri:'',version_pin:'sha',result:'PASS'});reject(m,'EVIDENCE_INCOMPLETE');
m=fresh();m.workstreams[1].official_iq_id=m.workstreams[0].official_iq_id;reject(m,'DUPLICATE_OFFICIAL_ID');
console.log('PASS — 9 synthetic evidence-gate tests (1 positive, 8 negative); no Suite runtime assertions');
