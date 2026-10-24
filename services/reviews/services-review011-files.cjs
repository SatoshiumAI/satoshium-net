const {chromium}=require('playwright');
const fs=require('fs');
const base='https://satoshium.net/services/';
const results=[];
const record=(name,o)=>{const v={test:name,...o};results.push(v);console.log('REVIEW011_FILE '+JSON.stringify(v));};
(async()=>{
 const browser=await chromium.launch();
 const errors=[];
 for(const [name,path,make,verify,importBtn] of [
  ['governance','agent-governance/tool.html','runEvaluation','verifyJson',null],
  ['ledger','verification-ledger/tool.html','generateLedger','verifyJson','importGovernanceBtn']
 ]){
  const context=await browser.newContext({acceptDownloads:true,viewport:{width:1280,height:820}});
  const page=await context.newPage(); page.setDefaultTimeout(9500);
  const pageErrors=[];page.on('pageerror',e=>pageErrors.push(String(e)));
  const dialogs=[];page.on('dialog',async d=>{dialogs.push(d.message());await d.accept()});
  try{
   const response=await page.goto(base+path,{waitUntil:'domcontentloaded',timeout:25000});
   if(name==='governance') await page.locator('#loadDemo').click();
   await page.locator('#'+make).focus();await page.keyboard.press('Enter');
   await page.waitForFunction(()=>{const t=document.querySelector('#hashValue')?.textContent||'';return t.trim().length>20&&!t.includes('Not generated yet')});
   const downloadPromise=page.waitForEvent('download',{timeout:9500});
   await page.locator('#downloadJson').focus();await page.keyboard.press('Enter');
   const download=await downloadPromise;
   const stream=await download.createReadStream();
   const chunks=[];for await(const chunk of stream)chunks.push(chunk);
   const file=Buffer.concat(chunks);const obj=JSON.parse(file.toString('utf8'));
   record(name+'_json_export',{http:response.status(),filename:download.suggestedFilename(),bytes:file.length,hasHash:!!obj.verification_reference_sha256Hash,pass:file.length>100&&!!obj.verification_reference_sha256Hash});
   dialogs.length=0;
   const chooserPromise=page.waitForEvent('filechooser',{timeout:9500});
   await page.locator('#'+verify).focus();await page.keyboard.press('Enter');
   const chooser=await chooserPromise;
   await chooser.setFiles({name:'sample.json',mimeType:'application/json',buffer:file});
   await page.waitForTimeout(350);
   record(name+'_json_verify',{dialog:[...dialogs],activeId:await page.evaluate(()=>document.activeElement?.id||''),pass:dialogs.some(x=>x.includes('SUCCESS'))});
   if(importBtn){
    dialogs.length=0;
    const chooser2=page.waitForEvent('filechooser',{timeout:9500});
    await page.locator('#'+importBtn).focus();await page.keyboard.press('Enter');
    await (await chooser2).setFiles({name:'bad.json',mimeType:'application/json',buffer:Buffer.from('{malformed')});
    await page.waitForTimeout(300);
    record('ledger_malformed_import',{dialog:[...dialogs],actor:await page.locator('#agentName').inputValue(),pass:dialogs.some(x=>x.includes('Import rejected'))});
   }
   for(const width of [640,320]){
    await page.setViewportSize({width,height:820});
    const layout=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,inner:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth+5}));
    record(name+'_reflow_'+width,{...layout,pass:!layout.overflow});
   }
   if(pageErrors.length)record(name+'_pageerrors',{errors:pageErrors,pass:false});
  }catch(e){record(name+'_exception',{error:String(e).slice(0,350),pass:false})}
  await context.close();
 }
 await browser.close();
 fs.writeFileSync('services-review011-file-results.json',JSON.stringify({observedAt:new Date().toISOString(),syntheticTraffic:true,results},null,2));
 if(results.some(x=>!x.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
