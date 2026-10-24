const {chromium}=require('playwright'),fs=require('fs');
const root='https://satoshium.net/services/';
const results=[];
(async()=>{
const browser=await chromium.launch();
for(const [name,path,generate] of [['governance','agent-governance/tool.html','#runEvaluation'],['ledger','verification-ledger/tool.html','#generateLedger']]){
 const ctx=await browser.newContext({acceptDownloads:true});const p=await ctx.newPage();p.setDefaultTimeout(9000);
 const alerts=[];p.on('dialog',async d=>{alerts.push(d.message());await d.accept()});
 try{
  await p.goto(root+path,{waitUntil:'domcontentloaded',timeout:25000});
  if(name==='governance')await p.locator('#loadDemo').click();
  await p.locator(generate).click();
  await p.waitForFunction(()=>document.querySelector('#hashValue')?.textContent?.length>30,{timeout:9000});
  const promise=p.waitForEvent('download');await p.locator('#downloadJson').click();const d=await promise;
  const stream=await d.createReadStream();const parts=[];for await(const x of stream)parts.push(x);
  const base=Buffer.concat(parts);
  const padded=Buffer.concat([base,Buffer.alloc(2*1024*1024,' ')]);
  alerts.length=0;
  await p.locator('#jsonFileInput').setInputFiles({name:'normal-valid.json',mimeType:'application/json',buffer:base});
  await p.waitForTimeout(350);
  const normalAccepted=alerts.some(x=>x.includes('Verification SUCCESS'));
  alerts.length=0;
  await p.locator('#jsonFileInput').setInputFiles({name:'oversized-but-valid.json',mimeType:'application/json',buffer:padded});
  await p.waitForTimeout(450);
  const accepted=alerts.some(x=>x.includes('Verification SUCCESS'));
  const rejected=alerts.some(x=>x.includes('exceeds 1 MiB limit'));
  let importRejected=true;
  if(name==='ledger'){
    alerts.length=0;
    await p.locator('#governanceFileInput').setInputFiles({name:'oversized-governance.json',mimeType:'application/json',buffer:padded});
    await p.waitForTimeout(300);
    importRejected=alerts.some(x=>x.includes('exceeds 1 MiB limit'));
  }
  const r={tool:name,baseBytes:base.length,uploadedBytes:padded.length,normalAccepted,accepted,rejected,importRejected,dialogs:alerts,observed:true,pass:normalAccepted&&!accepted&&rejected&&importRejected};
  results.push(r);console.log('REVIEW012_IMPORT_LIMIT '+JSON.stringify(r));
 }catch(e){const r={tool:name,error:String(e).slice(0,260),observed:false};results.push(r);console.log('REVIEW012_IMPORT_LIMIT '+JSON.stringify(r))}
 await ctx.close();
}
await browser.close();
fs.writeFileSync('services-review012-import-limit.json',JSON.stringify({observedAt:new Date().toISOString(),syntheticData:true,source:'2MiB trailing whitespace added to valid self-generated JSON',results},null,2));
if(results.some(x=>!x.observed||!x.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
