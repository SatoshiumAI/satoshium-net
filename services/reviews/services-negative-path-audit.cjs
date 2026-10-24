const {chromium}=require('playwright');
const fs=require('fs');
const root='https://satoshium.net/services/';
(async()=>{
const browser=await chromium.launch({headless:true});
let obs=[];
for(const target of [{key:'governance',url:root+'agent-governance/tool.html'}, {key:'ledger',url:root+'verification-ledger/tool.html'}]){
 const page=await browser.newPage();
 const errors=[],alerts=[];
 page.on('pageerror',e=>errors.push(e.message.slice(0,160)));
 page.on('dialog',async d=>{alerts.push(d.message());await d.accept()});
 try{
  const r=await page.goto(target.url,{waitUntil:'domcontentloaded',timeout:24000});
  await page.locator('#jsonFileInput').setInputFiles({name:'broken.json',mimeType:'application/json',buffer:Buffer.from('{broken:')});
  await page.waitForTimeout(400);
  obs.push({case:target.key+'_malformed_verify',http:r.status(),alerts:alerts.slice(),errors:errors.slice(),handledWithoutException:errors.length===0&&alerts.some(x=>/invalid|reject|fail|unreadable/i.test(x))});
  alerts.length=0;errors.length=0;
  await page.locator('#jsonFileInput').setInputFiles({name:'empty.json',mimeType:'application/json',buffer:Buffer.from('{}')});
  await page.waitForTimeout(400);
  obs.push({case:target.key+'_schema_empty_verify',alerts:alerts.slice(),errors:errors.slice(),handledWithoutException:errors.length===0});
 }catch(e){obs.push({case:target.key+'_test_error',error:String(e).slice(0,250)})}
 await page.close();
}
const api=await browser.newPage();
try{
 const errors=[];api.on('pageerror',e=>errors.push(e.message.slice(0,160)));
 await api.goto(root+'aegis/aegis-service-panel.html',{waitUntil:'domcontentloaded',timeout:24000});
 await api.locator('#runInspection').click();await api.waitForTimeout(350);
 obs.push({case:'aegis_empty_ids',result:(await api.locator('#responseOutput').innerText()).slice(0,250),errors});
 await api.route('https://api.satoshium.net/**',route=>route.abort('failed'));
 await api.locator('.preset').first().click();
 await api.locator('#runInspection').click();
 await api.waitForTimeout(800);
 obs.push({case:'aegis_api_failure',result:(await api.locator('#responseOutput').innerText()).slice(0,300),buttonEnabled:await api.locator('#runInspection').isEnabled(),errors});
}catch(e){obs.push({case:'aegis_error',error:String(e).slice(0,250)})}
await api.close();
for(const [name,path] of [['hub',root],['aegis',root+'aegis/aegis-service-panel.html'],['governance',root+'agent-governance/tool.html'],['ledger',root+'verification-ledger/tool.html']]){
 const p=await browser.newPage({viewport:{width:390,height:844}});
 try{
 await p.goto(path,{waitUntil:'domcontentloaded',timeout:24000});
 const links=await p.locator('a:visible,button:visible,input:not([type="hidden"]):visible').count();
 await p.keyboard.press('Tab');
 const initial=await p.evaluate(()=>({tag:document.activeElement?.tagName,label:document.activeElement?.getAttribute('aria-label')||document.activeElement?.textContent?.trim().slice(0,50)}));
 const a11y=await p.evaluate(()=>({main:document.querySelectorAll('main').length,headings:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth>innerWidth+5}));
 obs.push({case:name+'_mobile_keyboard',controls:links,firstFocus:initial,...a11y});
 }catch(e){obs.push({case:name+'_mobile_error',error:String(e).slice(0,230)})}await p.close();
}
await browser.close();
obs.forEach(x=>console.log('NEGATIVE_AUDIT '+JSON.stringify(x)));
fs.writeFileSync('negative-path-audit.json',JSON.stringify({checkedAt:new Date().toISOString(),observations:obs},null,2));
})().catch(e=>{console.error(e);process.exit(1)});