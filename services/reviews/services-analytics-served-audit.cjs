const { chromium } = require('playwright');
const fs=require('fs');
const routes=['/services/','/services/aegis/','/services/aegis/aegis-service-panel.html','/services/agent-governance/','/services/agent-governance/tool.html','/services/verification-ledger/','/services/verification-ledger/tool.html'];
(async()=>{
 const browser=await chromium.launch({headless:true});
 const results=[];
 for(const path of routes){
  const p=await browser.newPage({viewport:{width:1280,height:780}});
  const requests=[],failures=[],responses=[],pageErrors=[];
  p.on('request',q=>{if(/beacon\.min\.js|\/cdn-cgi\/rum/.test(q.url()))requests.push({method:q.method(),origin:new URL(q.url()).origin,kind:q.url().includes('beacon.min.js')?'script':'rum'})});
  p.on('requestfailed',q=>{if(/beacon\.min\.js|\/cdn-cgi\/rum/.test(q.url()))failures.push({kind:q.url().includes('beacon.min.js')?'script':'rum',error:q.failure()?.errorText||''})});
  p.on('response',r=>{if(/beacon\.min\.js|\/cdn-cgi\/rum/.test(r.url()))responses.push({status:r.status(),kind:r.url().includes('beacon.min.js')?'script':'rum',origin:new URL(r.url()).origin})});
  p.on('pageerror',e=>pageErrors.push(e.message.slice(0,180)));
  const result={path,requests,failures,responses,pageErrors};
  try{
   const r=await p.goto('https://satoshium.net'+path,{waitUntil:'domcontentloaded',timeout:20000});result.http=r?.status()??null;
   await p.waitForTimeout(1600);
   result.beaconScripts=await p.locator('script[src*="cloudflareinsights.com/beacon.min.js"]').evaluateAll(els=>els.map(el=>({source:el.src,tokenPresent:!!el.dataset.cfBeacon,elementKind:el.type||'classic'})));
   result.cspMeta=await p.locator('meta[http-equiv="Content-Security-Policy"]').count();
   result.cspHeader=(r?.headers()['content-security-policy']||'').slice(0,350);
  }catch(e){result.error=String(e).slice(0,250)}
  console.log('ANALYTICS_OBSERVATION '+JSON.stringify(result));results.push(result);
  await p.close();
 }
 await browser.close();
 fs.writeFileSync('services-analytics-observations.json',JSON.stringify({observedAt:new Date().toISOString(),classification:'automated GitHub CI traffic — not external user adoption',results},null,2));
})().catch(e=>{console.error(e);process.exit(1)});