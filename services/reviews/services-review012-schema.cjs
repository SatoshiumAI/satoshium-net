const {chromium}=require('playwright'),fs=require('fs');
const results=[];
(async()=>{
 const browser=await chromium.launch();
 for(const [name,path,button] of [['governance','agent-governance/tool.html','#runEvaluation'],['ledger','verification-ledger/tool.html','#generateLedger']]){
  const ctx=await browser.newContext({acceptDownloads:true});const p=await ctx.newPage();
  p.setDefaultTimeout(9000);const dialogs=[];p.on('dialog',async d=>{dialogs.push(d.message());await d.accept()});
  try{
   await p.goto('https://satoshium.net/services/'+path,{waitUntil:'domcontentloaded',timeout:25000});
   if(name==='governance')await p.locator('#loadDemo').click();
   await p.locator(button).click();await p.waitForFunction(()=>document.querySelector('#hashValue')?.textContent?.length>30);
   const download=p.waitForEvent('download');await p.locator('#downloadJson').click();const d=await download;
   const stream=await d.createReadStream();const chunks=[];for await(const c of stream)chunks.push(c);
   const original=JSON.parse(Buffer.concat(chunks).toString());
   const cases=[
    ['normal',original,'SUCCESS'],
    ['array',[],'FAILED'],
    ['null',null,'FAILED'],
    ['number',42,'FAILED'],
    ['empty_object',{},'FAILED'],
    ['hash_tampered',{...original,verification_reference_sha256Hash:'0'.repeat(64)},'FAILED'],
    ['wrong_record_type',{...original,record_type:'Unrelated Prototype'},'FAILED']
   ];
   for(const [kind,payload,expected] of cases){
    dialogs.length=0;
    await p.locator('#jsonFileInput').setInputFiles({name:kind+'.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(payload))});
    await p.waitForTimeout(170);
    const got=dialogs[0]||'NO_DIALOG';
    const pass=got.includes(expected);
    const r={tool:name,case:kind,expected,dialog:got,pass};
    results.push(r);console.log('REVIEW012_SCHEMA '+JSON.stringify(r));
   }
  }catch(e){let r={tool:name,case:'harness_error',error:String(e).slice(0,220),pass:false};results.push(r);console.log('REVIEW012_SCHEMA '+JSON.stringify(r))}
  await ctx.close();
 }
 await browser.close();
 fs.writeFileSync('services-review012-schema-results.json',JSON.stringify({observedAt:new Date().toISOString(),syntheticInput:true,results},null,2));
 if(results.some(x=>!x.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
