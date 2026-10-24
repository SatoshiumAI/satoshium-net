const {chromium}=require('playwright'),fs=require('fs');
const home='https://satoshium.net/services/';
const results=[];
const report=(name,o)=>{const line={test:name,...o};results.push(line);console.log('REVIEW007 '+JSON.stringify(line))};
(async()=>{
const browser=await chromium.launch({headless:true,timeout:15000});
for(const [name,path] of [['governance','agent-governance/tool.html'],['ledger','verification-ledger/tool.html']]){
const p=await browser.newPage({acceptDownloads:true});p.setDefaultTimeout(7000);
const errors=[],alerts=[];
p.on('pageerror',e=>errors.push(e.message.slice(0,120)));
p.on('dialog',async d=>{alerts.push(d.message());await d.accept()});
try{
const response=await p.goto(home+path,{waitUntil:'domcontentloaded',timeout:16000});
for(const [label,content] of [['malformed','{broken'],['empty','{}']]){
alerts.length=0;errors.length=0;
await p.locator('#jsonFileInput').setInputFiles({name:label+'.json',mimeType:'application/json',buffer:Buffer.from(content)});
await p.waitForTimeout(180);
report(name+'_'+label,{http:response.status(),alerts:[...alerts],errors:[...errors],failClosed:errors.length===0&&alerts.some(x=>x.includes('FAILED'))});
}
}catch(e){report(name+'_browser_exception',{error:String(e).slice(0,250)})}
await p.close();
}
const p=await browser.newPage();p.setDefaultTimeout(7000);
try{
await p.goto(home+'aegis/aegis-service-panel.html',{waitUntil:'domcontentloaded',timeout:16000});
await p.locator('#actors').fill('');
await p.locator('#runInspection').click();
let out=await p.locator('#responseOutput').innerText();
report('aegis_empty_actor',{errorVisible:out.includes('actorIds required'),buttonEnabled:await p.locator('#runInspection').isEnabled()});
await p.route('https://api.satoshium.net/**',r=>r.abort('failed'));
await p.locator('.preset').first().click();
await p.locator('#runInspection').click();
await p.waitForFunction(()=>{let o=document.querySelector('#responseOutput')?.textContent||'';return o.includes('"error": "Request failed"')},{timeout:6500}).catch(()=>{});
out=await p.locator('#responseOutput').innerText();
report('aegis_failed_api',{errorVisible:out.includes('Request failed'),buttonEnabled:await p.locator('#runInspection').isEnabled()});
}catch(e){report('aegis_browser_exception',{error:String(e).slice(0,230)})}
await p.close();
for(const [name,path] of [['hub',''],['aegis','aegis/aegis-service-panel.html'],['governance','agent-governance/tool.html'],['ledger','verification-ledger/tool.html']]){
const q=await browser.newPage({viewport:{width:390,height:844}});q.setDefaultTimeout(6000);
try{
const res=await q.goto(home+path,{waitUntil:'domcontentloaded',timeout:16000});
await q.keyboard.press('Tab');
const data=await q.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+5,mainCount:document.querySelectorAll('main').length,h1Count:document.querySelectorAll('h1').length,firstFocus:document.activeElement?.tagName||null}));
report(name+'_mobile_focus',{http:res.status(),...data});
}catch(e){report(name+'_mobile_exception',{error:String(e).slice(0,230)})}
await q.close();
}
await browser.close();
fs.writeFileSync('review-007-browser-results.json',JSON.stringify({checkedAt:new Date().toISOString(),results},null,2));
})().catch(e=>{console.error('FATAL',e);process.exit(1)});