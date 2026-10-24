const {chromium}=require('playwright');
const fs=require('fs');
const pages=[
 ['hub','https://satoshium.net/services/'],
 ['aegis','https://satoshium.net/services/aegis/aegis-service-panel.html'],
 ['governance','https://satoshium.net/services/agent-governance/tool.html'],
 ['ledger','https://satoshium.net/services/verification-ledger/tool.html']
];
(async()=>{
 const browser=await chromium.launch();
 const findings=[];
 for(const [name,url] of pages){
  const page=await browser.newPage({viewport:{width:1280,height:800}});
  const reqs=[],failures=[],errors=[];
  page.on('request',req=>{
   try{
    const u=new URL(req.url());
    reqs.push({origin:u.origin,method:req.method(),type:req.resourceType()});
   }catch(e){}
  });
  page.on('requestfailed',req=>{
   try{failures.push({origin:new URL(req.url()).origin,reason:req.failure()?.errorText||'unknown'});}catch(e){}
  });
  page.on('pageerror',e=>errors.push(String(e.message).slice(0,180)));
  await page.route('https://api.satoshium.net/**',route=>route.fulfill({status:200,contentType:'application/json',body:'{"source":"synthetic pilot network check","actors":["actor-a","actor-b"]}'}));
  let status=0;
  try{
   const resp=await page.goto(url,{waitUntil:'domcontentloaded',timeout:30000});status=resp.status();
   await page.waitForTimeout(2500);
   if(name==='aegis'){
    await page.locator('.preset[data-actors="actor-a,actor-b"]').click();
    await page.locator('#runInspection').click();
    await page.waitForTimeout(700);
   }else if(name==='governance'){
    await page.locator('#loadDemo').click();
    await page.locator('#runEvaluation').click();
    await page.waitForTimeout(350);
   }else if(name==='ledger'){
    await page.locator('#agentName').fill('synthetic_pilot_demo');
    await page.locator('#ruleId').fill('synthetic_pilot_rule');
    await page.locator('#generateLedger').click();
    await page.waitForTimeout(350);
   }
   const origins=[...new Set(reqs.map(r=>r.origin))].sort();
   const observed={name,status,origins,apiRequestCount:reqs.filter(r=>r.origin==='https://api.satoshium.net').length,failedOrigins:[...new Set(failures.map(x=>x.origin))],pageErrors:errors,pass:status===200&&(name!=='aegis'||reqs.some(x=>x.origin==='https://api.satoshium.net'))};
   findings.push(observed);
   console.log('REVIEW013_NETWORK '+JSON.stringify(observed));
  }catch(e){const observed={name,status,error:String(e).slice(0,200),pass:false};findings.push(observed);console.log('REVIEW013_NETWORK '+JSON.stringify(observed));}
  await page.close();
 }
 await browser.close();
 fs.writeFileSync('review013-network-observations.json',JSON.stringify({method:'public-page Chromium network-origin observation; fictional inputs; API mocked',observedAt:new Date().toISOString(),findings},null,2));
 if(findings.some(x=>!x.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
