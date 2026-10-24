const { chromium } = require('playwright');
const fs = require('fs');
const TARGETS = [
 {key:'services-hub',url:'https://satoshium.net/services/',kind:'landing'},
 {key:'aegis',url:'https://satoshium.net/services/aegis/aegis-service-panel.html',kind:'aegis'},
 {key:'governance',url:'https://satoshium.net/services/agent-governance/tool.html',kind:'governance'},
 {key:'ledger',url:'https://satoshium.net/services/verification-ledger/tool.html',kind:'ledger'}
];
(async()=>{
 const browser=await chromium.launch({headless:true});
 let results=[];
 for(const t of TARGETS){
  const page=await browser.newPage({viewport:{width:1280,height:900}});
  let result={tool:t.key,url:t.url,errors:[],failedRequests:[]};
  page.on('pageerror',e=>result.errors.push(e.message.slice(0,200)));
  page.on('requestfailed',req=>{if(/api\.satoshium\.net/.test(req.url()))result.failedRequests.push({url:req.url(),failure:req.failure()?.errorText||''})});
  try{
   const res=await page.goto(t.url,{waitUntil:'domcontentloaded',timeout:25000});
   result.http_status=res?.status()??null;
   if(t.kind==='landing'){
    result.cta_links=await page.locator('a[href*="/services/"]').evaluateAll(els=>els.map(el=>({label:(el.innerText||'').trim().slice(0,90),href:el.href})).slice(0,25));
   }
   if(t.kind==='aegis'){
    await page.locator('.preset').first().click();
    result.sample_actor_ids=await page.locator('#actors').inputValue();
    await page.locator('#runInspection').click();
    await page.waitForFunction(()=>{const s=document.querySelector('#responseOutput')?.textContent||'';return s.includes('"service"')||s.includes('"error"')},{timeout:15000}).catch(()=>{});
    const response=await page.locator('#responseOutput').innerText();
    result.output_excerpt=response.slice(0,400);
    result.api_json_received=response.includes('"service"')&&!response.includes('"error": "Request failed"');
    result.request_failed=response.includes('"error": "Request failed"');
   }
   if(t.kind==='governance'){
    await page.locator('#loadDemo').click();
    await page.locator('#runEvaluation').click();
    await page.waitForTimeout(1300);
    result.summary=(await page.locator('#resultSummary').innerText()).slice(0,350);
    result.output_record_nonempty=(await page.locator('#executionOutputRecord').count())>0 && (await page.locator('#executionOutputRecord').innerText()).length>40;
   }
   if(t.kind==='ledger'){
    await page.locator('#generateLedger').click();
    await page.waitForTimeout(1300);
    result.summary=(await page.locator('#resultSummary').innerText()).slice(0,350);
    result.output_record_nonempty=(await page.locator('#executionOutputRecord').count())>0 && (await page.locator('#executionOutputRecord').innerText()).length>40;
   }
  }catch(e){result.error=String(e).slice(0,320)}
  console.log('SERVICE_SMOKE '+JSON.stringify(result));results.push(result);await page.close();
 }
 await browser.close();
 fs.writeFileSync('service-browser-smoke-results.json',JSON.stringify({checkedAt:new Date().toISOString(),results},null,2));
})().catch(e=>{console.error(e);process.exit(1)});
