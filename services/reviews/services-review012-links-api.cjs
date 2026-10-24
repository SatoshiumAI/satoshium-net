const {chromium}=require('playwright'),fs=require('fs');
const root='https://satoshium.net';
const results=[];
const record=(test,fields)=>{const r={test,...fields};results.push(r);console.log('REVIEW012_LINK_API '+JSON.stringify(r));};
(async()=>{
const browser=await chromium.launch();
const page=await browser.newPage();page.setDefaultTimeout(9000);
try{
 const resp=await page.goto(root+'/services/',{waitUntil:'domcontentloaded',timeout:22000});
 const links=await page.locator('main a[href]').evaluateAll(els=>els.map(e=>({label:e.textContent.trim().slice(0,75),href:e.getAttribute('href')})));
 const sameSite=[...new Map(links.map(e=>[new URL(e.href,root).href,e]).filter(([url,e])=>new URL(url).hostname==='satoshium.net'&&new URL(url).protocol==='https:')).values()];
 for(const link of sameSite){
  const target=new URL(link.href,root).href.split('#')[0];
  try{
   let r=await page.request.get(target,{timeout:14000,maxRedirects:5});
   record('hub_link',{label:link.label,href:target,status:r.status(),pass:r.ok()});
  }catch(e){record('hub_link',{href:target,error:String(e).slice(0,175),pass:false});}
 }
 record('hub_load',{status:resp.status(),sameSiteLinks:sameSite.length,pass:resp.status()===200&&sameSite.length>=6});
}catch(e){record('hub_exception',{error:String(e).slice(0,250),pass:false})}
await page.close();
for(const [name,response] of [
 ['bad_json',{status:200,contentType:'application/json',body:'{broken'}],
 ['http_503',{status:503,contentType:'text/plain',body:'Service unavailable'}],
 ['valid_json',{status:200,contentType:'application/json',body:'{"service":"review012-sample","data":{"test":true}}'}]
]){
 const ctx=await browser.newContext();const p=await ctx.newPage();p.setDefaultTimeout(7500);
 let intercepted=0;const errors=[];p.on('pageerror',e=>errors.push(e.message));
 try{
  await p.route('https://api.satoshium.net/**',route=>{intercepted++;return route.fulfill({status:response.status,contentType:response.contentType,body:response.body})});
  await p.goto(root+'/services/aegis/aegis-service-panel.html',{waitUntil:'domcontentloaded',timeout:22000});
  await p.locator('#runInspection').click();
  await p.waitForFunction(()=>document.querySelector('#runInspection')?.textContent==='Run Inspection',{timeout:6500});
  const output=await p.locator('#responseOutput').innerText();
  let parsed;try{parsed=JSON.parse(output)}catch(e){parsed={};}
  let pass=intercepted===1&&errors.length===0&&await p.locator('#runInspection').isEnabled();
  pass=pass&&(name==='valid_json'?parsed.service==='review012-sample':parsed.error==='Request failed');
  record('aegis_'+name,{intercepted,error:parsed.error||null,details:parsed.details||null,buttonEnabled:await p.locator('#runInspection').isEnabled(),jsErrors:errors,pass});
 }catch(e){record('aegis_'+name,{error:String(e).slice(0,250),pass:false})}
 await ctx.close();
}
await browser.close();
fs.writeFileSync('services-review012-link-api-results.json',JSON.stringify({observedAt:new Date().toISOString(),syntheticTraffic:true,results},null,2));
if(results.some(x=>!x.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
