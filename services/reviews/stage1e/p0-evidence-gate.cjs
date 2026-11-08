#!/usr/bin/env node
'use strict';
// Documentation evidence gate only: NOT a production interoperability validator.
const fs = require('node:fs');
const path = require('node:path');
const VALID_STATUS = new Set(['NOT_VERIFIED','SOURCE_ONLY','TESTED_WITH_LIMITS','ACCEPTED']);
const EVIDENCE_CLASSES = new Set(['SOURCE','UNIT','INTEGRATION','BROWSER','HUMAN']);
function validate(m) {
  const errors=[];
  const err=(code,detail)=>errors.push({code,detail});
  if (!m || typeof m!=='object' || Array.isArray(m)) return {ok:false,errors:[{code:'INVALID_MANIFEST',detail:'Root must be an object'}]};
  if (m.manifest_version!=='stage1e-review-v1') err('BAD_VERSION','Unknown manifest version');
  if (m.expected_p0_count!==11) err('BAD_EXPECTED_COUNT','Historical P0 count must be 11');
  if (!m.source_provenance || !m.source_provenance.source_limit) err('MISSING_SOURCE_LIMIT','Preserve provenance limitations');
  if (!Array.isArray(m.workstreams) || m.workstreams.length!==11) { err('COUNT','Exactly eleven P0 workstreams expected'); return {ok:false,errors}; }
  const ids=new Set(), official=new Set();
  m.workstreams.forEach((w,i)=>{
    const at=`workstreams[${i}]`;
    if (!w || typeof w!=='object') {err('BAD_ROW',at);return;}
    if (!/^P0-\d{2}-LOCAL$/.test(w.local_id||'')) err('LOCAL_ID',at);
    if (ids.has(w.local_id)) err('DUPLICATE_LOCAL_ID',at);ids.add(w.local_id);
    if (typeof w.title!=='string'||!w.title.trim())err('MISSING_TITLE',at);
    if (w.priority!=='P0')err('PRIORITY',at);
    if (w.official_iq_id!==null){
      if (!/^IQ-\d{3}$/.test(w.official_iq_id||''))err('OFFICIAL_ID_FORMAT',at);
      if (official.has(w.official_iq_id))err('DUPLICATE_OFFICIAL_ID',at);
      official.add(w.official_iq_id);
      if (!w.canonical_contract_sha)err('OFFICIAL_ID_NEEDS_PROVENANCE',at);
    }
    if (!VALID_STATUS.has(w.verification_status))err('BAD_STATUS',at);
    if (!Array.isArray(w.test_vector_ids)||!w.test_vector_ids.length||w.test_vector_ids.some(x=>!/^D\d{2}$/.test(x)))err('TEST_VECTOR_IDS',at);
    if (!Array.isArray(w.evidence)) {err('EVIDENCE_FORMAT',at);return;}
    w.evidence.forEach((e,j)=>{
      if (!e || !EVIDENCE_CLASSES.has(e.kind) || typeof e.source_uri!=='string'||!e.source_uri.trim() || typeof e.version_pin!=='string'||!e.version_pin.trim() || typeof e.result!=='string'||!e.result.trim())err('EVIDENCE_INCOMPLETE',`${at}.evidence[${j}]`);
    });
    if (w.verification_status==='SOURCE_ONLY' && !w.evidence.some(e=>e.kind==='SOURCE'))err('SOURCE_STATUS_NO_SOURCE',at);
    if (w.verification_status==='TESTED_WITH_LIMITS' && !w.evidence.some(e=>e.kind==='INTEGRATION'||e.kind==='UNIT'||e.kind==='BROWSER'))err('TEST_STATUS_NO_TEST',at);
    if (w.verification_status==='ACCEPTED'){
      if (!w.official_iq_id || !w.canonical_contract_sha || !w.producer || !w.consumer || !w.implementation_location || w.reviewer_disposition!=='FOUNDER_APPROVED') err('UNSUPPORTED_ACCEPTANCE',at);
      if (!w.evidence.some(e=>(e.kind==='INTEGRATION'||e.kind==='UNIT'||e.kind==='BROWSER') && e.result==='PASS'))err('ACCEPTANCE_NO_EXECUTABLE_PASS',at);
    }
  });
  return {ok:errors.length===0,errors};
}
function main(){
  const name=process.argv[2]||path.join(__dirname,'p0-evidence-manifest.json');
  let m;try{m=JSON.parse(fs.readFileSync(name,'utf8'))}catch(e){console.error(`INPUT_ERROR: ${e.message}`);process.exitCode=2;return;}
  const v=validate(m);
  const statuses={}; for(const w of m.workstreams||[])statuses[w.verification_status]=(statuses[w.verification_status]||0)+1;
  console.log(JSON.stringify({type:'STAGE1E_EVIDENCE_GATE',result:v.ok?'PASS':'FAIL',scope:'DOCUMENTATION_COMPLETENESS_ONLY',official_ids_mapped:(m.workstreams||[]).filter(w=>w.official_iq_id!==null).length,verification_counts:statuses,errors:v.errors},null,2));
  if(!v.ok)process.exitCode=1;
}
if (require.main===module) main();
module.exports={validate};
