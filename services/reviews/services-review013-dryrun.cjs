const {chromium}=require('playwright');
const fs=require('fs');
const observations=[];
function record(name,pass,details={}){const x={name,pass,...details};observations.push(x);console.log('REVIEW013_DRYRUN '+JSON.stringify(x));}
(async()=>{
const browser=await chromium.launch();
const context=await browser.newContext({acceptDownloads:true,viewport:{width:1280,height:800}});
const page=await context.newPage();page.setDefaultTimeout(12000);
const dialogs=[];page.on('dialog',async d=>{dialogs.push(d.message());await d.accept()});
let governanceRecord;
try{
 await page.goto('https://satoshium.net/services/',{waitUntil:'domcontentloaded'});
 const landingText=await page.locator('body').innerText();
 const links=await page.locator('a.service-action').count();
 record('services-discovery',links===3&&landingText.includes('demonstration inputs'),{ctaCount:links});
}catch(e){record('services-discovery',false,{error:String(e).slice(0,240)})}
try{
 let apiCalls=0;
 await page.route('https://api.satoshium.net/**',route=>{
  apiCalls++;return route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({service:'certificationAuthority',version:'v1',mode:'explorer',data:{actors:['actor-a','actor-b'],simulation:true}})});
 });
 await page.locator('a.service-action[href*="/aegis/"]').click();
 await page.locator('.preset[data-actors="actor-a,actor-b"]').click();
 await page.locator('#runInspection').click();
 await page.waitForFunction(()=>document.querySelector('#runInspection')?.textContent==='Run Inspection'&&document.querySelector('#responseOutput')?.textContent.includes('certificationAuthority'));
 const a=await page.locator('#responseOutput').innerText();
 record('task-A-aegis',apiCalls===1&&a.includes('actor-a')&&await page.locator('#runInspection').isEnabled(),{apiCalls,usedMock:true});
}catch(e){record('task-A-aegis',false,{error:String(e).slice(0,280)})}
try{
 await page.goto('https://satoshium.net/services/',{waitUntil:'domcontentloaded'});
 await page.locator('a.service-action[href*="/agent-governance/"]').click();
 await page.locator('#loadDemo').click();
 await page.locator('#runEvaluation').click();
 await page.waitForFunction(()=>document.querySelector('#hashValue')?.textContent.length>30);
 const decision=await page.locator('#statusWrap').innerText();
 const downloadPromise=page.waitForEvent('download');
 await page.locator('#downloadJson').click();
 const d=await downloadPromise,stream=await d.createReadStream(),chunks=[];for await(const c of stream)chunks.push(c);
 const bytes=Buffer.concat(chunks);governanceRecord=bytes;
 const data=JSON.parse(bytes.toString('utf8'));
 dialogs.length=0;
 await page.locator('#jsonFileInput').setInputFiles({name:'sample-governance.json',mimeType:'application/json',buffer:bytes});
 await page.waitForTimeout(350);
 const verified=dialogs.some(x=>x.startsWith('Verification SUCCESS'));
 record('task-B-governance',verified&&bytes.length<1024*1024&&data.verification_reference_sha256Hash.length===64,{decision,bytes:bytes.length,verified});
}catch(e){record('task-B-governance',false,{error:String(e).slice(0,280)})}
try{
 await page.goto('https://satoshium.net/services/',{waitUntil:'domcontentloaded'});
 await page.locator('a.service-action[href*="/verification-ledger/"]').click();
 await page.locator('#agentName').fill('sample_pilot_agent');
 await page.locator('#ruleId').fill('sample_pilot_rule');
 await page.locator('#generateLedger').click();
 await page.waitForFunction(()=>document.querySelector('#hashValue')?.textContent.length>30);
 const downloadPromise=page.waitForEvent('download');
 await page.locator('#downloadJson').click();
 const d=await downloadPromise,stream=await d.createReadStream(),chunks=[];for await(const c of stream)chunks.push(c);
 const bytes=Buffer.concat(chunks);
 dialogs.length=0;
 await page.locator('#jsonFileInput').setInputFiles({name:'sample-ledger.json',mimeType:'application/json',buffer:bytes});
 await page.waitForTimeout(350);
 const verified=dialogs.some(x=>x.startsWith('Verification SUCCESS'));
 record('task-C-ledger',verified&&bytes.length<1024*1024,{bytes:bytes.length,verified});
 if(governanceRecord){
  dialogs.length=0;
  await page.locator('#governanceFileInput').setInputFiles({name:'sample-governance.json',mimeType:'application/json',buffer:governanceRecord});
  await page.waitForTimeout(350);
  const notified=dialogs.some(x=>x.includes('does not authenticate its issuer'));
  record('task-C-optional-import',notified,{noticeShown:notified});
 }
}catch(e){record('task-C-ledger',false,{error:String(e).slice(0,280)})}
await context.close();await browser.close();
fs.writeFileSync('services-review013-internal-dryrun.json',JSON.stringify({date:new Date().toISOString(),method:'private headless Chromium only; Aegis API mock, no participant',observations},null,2));
if(observations.some(o=>!o.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
