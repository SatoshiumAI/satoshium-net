const {chromium}=require('playwright'),fs=require('fs');
(async()=>{
const browser=await chromium.launch(),results=[];
for(const test of ['network_abort','double_click','long_actor_ids']){
 const ctx=await browser.newContext(),page=await ctx.newPage();page.setDefaultTimeout(9000);
 const calls=[];const errors=[];page.on('pageerror',e=>errors.push(e.message));
 try{
  await page.route('https://api.satoshium.net/**',async route=>{
   calls.push(route.request().url());
   if(test==='network_abort')return route.abort('failed');
   if(test==='double_click')await new Promise(r=>setTimeout(r,700));
   return route.fulfill({status:200,contentType:'application/json',body:'{"service":"mock","data":{"ok":true}}'});
  });
  await page.goto('https://satoshium.net/services/aegis/aegis-service-panel.html',{waitUntil:'domcontentloaded',timeout:22000});
  if(test==='long_actor_ids')await page.locator('#actors').fill('a'.repeat(5000));
  if(test==='double_click'){
   await page.locator('#runInspection').evaluate(e=>{e.click();e.click()});
  }else await page.locator('#runInspection').click();
  await page.waitForFunction(()=>document.querySelector('#runInspection')?.textContent==='Run Inspection',{timeout:9500});
  const output=await page.locator('#responseOutput').innerText(),o=JSON.parse(output);
  const r={test,requests:calls.length,queryCharacters:calls[0]?.length||0,error:o.error||null,enabled:await page.locator('#runInspection').isEnabled(),jsErrors:errors,pass:errors.length===0};
  if(test==='network_abort')r.pass&&=o.error==='Request failed'&&r.enabled;
  if(test==='double_click')r.pass&&=calls.length===1&&r.enabled;
  results.push(r);
 }catch(e){results.push({test,error:String(e).slice(0,250),pass:false})}
 await ctx.close();
}
await browser.close();
for(let r of results)console.log('REVIEW012_BOUNDARY '+JSON.stringify(r));
fs.writeFileSync('services-review012-input-boundaries.json',JSON.stringify({observedAt:new Date().toISOString(),syntheticOnly:true,results},null,2));
if(results.some(r=>!r.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
