const {chromium}=require('playwright');
const fs=require('fs');
const URLS={
 governance:'https://satoshium.net/services/agent-governance/tool.html',
 ledger:'https://satoshium.net/services/verification-ledger/tool.html',
 aegis:'https://satoshium.net/services/aegis/aegis-service-panel.html'
};
(async()=>{
 const browser=await chromium.launch({headless:true});
 const results=[];
 const p=await browser.newPage({acceptDownloads:true,viewport:{width:1280,height:820}});
 const errs=[];
 p.on('pageerror',e=>errs.push(e.message.slice(0,180)));
 let govJSON=null;
 try {
  await p.goto(URLS.governance,{waitUntil:'domcontentloaded',timeout:25000});
  await p.locator('#loadDemo').click();await p.locator('#runEvaluation').click();
  const down=await Promise.all([p.waitForEvent('download',{timeout:12000}),p.locator('#downloadJson').click()]);
  const content=await fs.promises.readFile(await down[0].path(),'utf8');govJSON=JSON.parse(content);
  const dialogs=[];
  p.on('dialog',async d=>{dialogs.push(d.message());await d.accept()});
  await p.locator('#jsonFileInput').setInputFiles({name:'governance.json',mimeType:'application/json',buffer:Buffer.from(content)});
  await p.waitForTimeout(400);
  results.push({test:'governance_valid_roundtrip',messages:dialogs.slice(),valid:dialogs.some(x=>x.includes('SUCCESS')),pageErrors:errs.slice()});
  dialogs.length=0;
  const edited={...govJSON,action_text:'ALTERED ACTION TEXT'};
  await p.locator('#jsonFileInput').setInputFiles({name:'tampered-governance.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(edited))});
  await p.waitForTimeout(400);
  results.push({test:'governance_tamper_detection',messages:dialogs.slice(),rejected:dialogs.some(x=>x.includes('FAILED'))});
 }catch(e){results.push({test:'governance_workflow_error',error:String(e).slice(0,320)})}
 await p.close();
 const q=await browser.newPage({acceptDownloads:true,viewport:{width:1280,height:820}});
 const ledgerErrors=[];q.on('pageerror',e=>ledgerErrors.push(e.message.slice(0,180)));
 try {
  await q.goto(URLS.ledger,{waitUntil:'domcontentloaded',timeout:25000});
  await q.locator('#generateLedger').click();
  const down=await Promise.all([q.waitForEvent('download',{timeout:12000}),q.locator('#downloadJson').click()]);
  const content=await fs.promises.readFile(await down[0].path(),'utf8');
  const ledger=JSON.parse(content);const dialogs=[];
  q.on('dialog',async d=>{dialogs.push(d.message());await d.accept()});
  await q.locator('#jsonFileInput').setInputFiles({name:'ledger.json',mimeType:'application/json',buffer:Buffer.from(content)});
  await q.waitForTimeout(400);
  results.push({test:'ledger_valid_roundtrip',valid:dialogs.some(x=>x.includes('SUCCESS')),messages:dialogs.slice(),pageErrors:ledgerErrors.slice()});
  dialogs.length=0;
  await q.locator('#jsonFileInput').setInputFiles({name:'ledger-tampered.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify({...ledger,notes:'tampered'}))});
  await q.waitForTimeout(400);
  results.push({test:'ledger_tamper_detection',rejected:dialogs.some(x=>x.includes('FAILED')),messages:dialogs.slice()});
  if(govJSON){
   await q.locator('#governanceFileInput').setInputFiles({name:'tampered-gov.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify({...govJSON,agent_name:'FORGED NAME'}))});
   await q.waitForTimeout(350);
   results.push({test:'ledger_import_tampered_governance',value:await q.locator('#agentName').inputValue(),acceptedForged:await q.locator('#agentName').inputValue()==='FORGED NAME',pageErrors:ledgerErrors.slice()});
  }
 }catch(e){results.push({test:'ledger_workflow_error',error:String(e).slice(0,350)})}
 await q.close();
 for(const [key,url] of Object.entries(URLS)){
  const m=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const exceptions=[];m.on('pageerror',e=>exceptions.push(e.message.slice(0,180)));
  try{
   let r=await m.goto(url,{waitUntil:'domcontentloaded',timeout:25000});
   await m.waitForTimeout(1000);
   let metrics=await m.evaluate(()=>({viewport:window.innerWidth,documentWidth:document.documentElement.scrollWidth,bodyWidth:document.body.scrollWidth,focusedButtonLabels:[...document.querySelectorAll('button')].slice(0,3).map(b=>b.textContent.trim().slice(0,50))}));
   results.push({test:'mobile_'+key,http:r?.status(),...metrics,horizontalOverflow:metrics.documentWidth>metrics.viewport+5,errors:exceptions});
  }catch(e){results.push({test:'mobile_'+key,error:String(e).slice(0,250)})}
  await m.close();
 }
 const k=await browser.newPage({viewport:{width:1280,height:800}});
 try{
  await k.goto(URLS.governance,{waitUntil:'domcontentloaded',timeout:25000});
  await k.keyboard.press('Tab');
  results.push({test:'keyboard_governance_first_tab',active:await k.evaluate(()=>({tag:document.activeElement?.tagName,id:document.activeElement?.id,text:(document.activeElement?.textContent||'').slice(0,60)}))});
 }catch(e){results.push({test:'keyboard_error',error:String(e).slice(0,260)})}
 await k.close();await browser.close();
 for(const r of results)console.log('USABILITY_AUDIT '+JSON.stringify(r));
 fs.writeFileSync('services-usability-results.json',JSON.stringify({observedAt:new Date().toISOString(),results},null,2));
})().catch(e=>{console.error(e);process.exit(1)});