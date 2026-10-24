const {chromium}=require('playwright'),fs=require('fs');
(async()=>{
 const b=await chromium.launch();
 const out=[];
 const p=await b.newPage();p.setDefaultTimeout(10000);
 p.on('dialog',d=>d.accept());
 try{
  await p.goto('https://satoshium.net/services/agent-governance/tool.html',{waitUntil:'domcontentloaded'});
  await p.locator('#loadDemo').click();
  await p.locator('#testerName').fill('Probe <span id="review012-safe-marker">TEST</span>');
  await p.locator('#runEvaluation').click();
  await p.waitForFunction(()=>document.querySelector('#hashValue')?.textContent?.length>30);
  const popupPromise=p.waitForEvent('popup',{timeout:9000});
  await p.locator('#openReceipt').click();
  const popup=await popupPromise;await popup.waitForLoadState('domcontentloaded');
  const inserted=await popup.locator('#review012-safe-marker').count();
  const receipt=await popup.locator('body').innerText();
  out.push({name:'receipt_markup',markerParsedAsDom:inserted>0,plainTextPresent:receipt.includes('Probe'),riskReproduced:inserted>0});
  await popup.close();
 }catch(e){out.push({name:'receipt_exception',error:String(e).slice(0,300)})}
 await p.close();
 const q=await b.newPage();q.setDefaultTimeout(10000);
 try{
  await q.goto('https://satoshium.net/services/verification-ledger/tool.html',{waitUntil:'domcontentloaded'});
  await q.locator('#ruleId').fill('Demo <span id="review012-ledger-marker">TEST</span>');
  await q.locator('#generateLedger').click();
  await q.waitForFunction(()=>document.querySelector('#hashValue')?.textContent?.length>30);
  out.push({name:'ledger_summary_markup',markerParsedAsDom:await q.locator('#review012-ledger-marker').count()>0,riskReproduced:await q.locator('#review012-ledger-marker').count()>0});
 }catch(e){out.push({name:'ledger_exception',error:String(e).slice(0,300)})}
 await q.close();await b.close();
 for(const v of out)console.log('REVIEW012_BASELINE '+JSON.stringify(v));
 fs.writeFileSync('services-review012-baseline.json',JSON.stringify({date:new Date().toISOString(),harmlessMarkupOnly:true,observations:out},null,2));
 if(out.length!==2||out.some(x=>x.error))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
