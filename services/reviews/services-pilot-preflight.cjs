const { chromium } = require('playwright');
const fs=require('fs');
const base='https://satoshium.net';
const tests=[
 {key:'hub',path:'/services/',selector:'#services-analytics-notice',terms:['Cloudflare Web Analytics','pageview','completing a tool action']},
 {key:'aegis',path:'/services/aegis/aegis-service-panel.html',selector:'#privacy-scope-heading',terms:['Privacy and usage','actor identifiers','Cloudflare']},
 {key:'governance',path:'/services/agent-governance/tool.html',selector:'#privacy-heading',terms:['processed locally','Pageview measurement','Cloudflare']},
 {key:'ledger',path:'/services/verification-ledger/tool.html',selector:'#privacy-heading',terms:['generated locally','Pageview measurement','Cloudflare']}
];
(async()=>{
 const browser=await chromium.launch({headless:true});
 const results=[];
 for(const test of tests){
  const page=await browser.newPage({viewport:{width:390,height:844}});
  page.setDefaultTimeout(8000);
  const errors=[];page.on('pageerror',e=>errors.push(String(e).slice(0,160)));
  const r={page:test.key,path:test.path};
  try{
   const response=await page.goto(base+test.path,{waitUntil:'domcontentloaded',timeout:20000});
   r.http=response.status();
   await page.locator(test.selector).waitFor({state:'visible',timeout:8000});
   const contents=(await page.locator('body').innerText()).replace(/\s+/g,' ');
   r.requiredTerms=Object.fromEntries(test.terms.map(term=>[term,contents.includes(term)]));
   r.noticeVisible=true;
   r.horizontalOverflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+5);
   r.beaconCount=await page.locator('script[src*="cloudflareinsights.com/beacon.min.js"]').count();
   r.pageErrors=errors;
   r.pass=r.http===200&&r.noticeVisible&&!r.horizontalOverflow&&r.beaconCount===1&&errors.length===0&&Object.values(r.requiredTerms).every(Boolean);
  }catch(e){r.pass=false;r.error=String(e).slice(0,250)}
  results.push(r);
  console.log('PILOT_PREFLIGHT '+JSON.stringify(r));
  await page.close();
 }
 await browser.close();
 fs.writeFileSync('services-pilot-preflight.json',JSON.stringify({observedAt:new Date().toISOString(),syntheticTraffic:true,results},null,2));
 if(results.some(x=>!x.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});