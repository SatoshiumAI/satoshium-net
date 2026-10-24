const {chromium}=require('playwright');
const fs=require('fs');
const root='https://satoshium.net/services/';
const cases=[
 {name:'aegis',path:'aegis/aegis-service-panel.html',controls:['runInspection','.preset'],action:'runInspection',output:'#responseOutput'},
 {name:'governance',path:'agent-governance/tool.html',controls:['loadDemo','runEvaluation','clearForm','downloadJson','downloadTxtBtn','openReceipt','verifyJson'],action:'runEvaluation',output:'#resultSummary'},
 {name:'ledger',path:'verification-ledger/tool.html',controls:['generateLedger','importGovernanceBtn','downloadJson','downloadTxtBtn','verifyJson'],action:'generateLedger',output:'#resultSummary'}
];
const results=[];
(async()=>{
 const browser=await chromium.launch();
 for(const test of cases){
  const context=await browser.newContext({viewport:{width:1280,height:800},acceptDownloads:true});
  const page=await context.newPage();page.setDefaultTimeout(8000);
  const r={page:test.name};const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  try{
   const resp=await page.goto(root+test.path,{waitUntil:'domcontentloaded',timeout:25000});
   r.http=resp.status();
   r.reachable={};
   const seen=new Set();
   for(let i=0;i<110;i++){
    await page.keyboard.press('Tab');
    const item=await page.evaluate(()=>{const e=document.activeElement;const c=getComputedStyle(e);return {id:e.id,cls:e.className,tag:e.tagName,label:(e.innerText||'').slice(0,50),visible:e.getClientRects().length>0,outline:c.outlineStyle,outlineWidth:c.outlineWidth}});
    for(const key of test.controls){
     const matched=key.startsWith('.')?String(item.cls).split(/\s+/).includes(key.slice(1)):item.id===key;
     if(matched&&!seen.has(key)){seen.add(key);r.reachable[key]={tab:i+1,...item};}
    }
    if(seen.size===test.controls.length)break;
   }
   r.missing=test.controls.filter(k=>!seen.has(k));
   if(test.name==='aegis'){
    await page.locator('.preset').first().focus();
    await page.keyboard.press('Enter');
    r.presetActivated=(await page.locator('#actors').inputValue())==='actor-a,actor-b';
    await page.locator('#actors').fill('');
    await page.locator('#runInspection').focus();await page.keyboard.press('Enter');
    r.errorVisible=(await page.locator('#responseOutput').innerText()).includes('actorIds required');
   }else if(test.name==='governance'){
    await page.locator('#loadDemo').focus();await page.keyboard.press('Enter');
    r.demoLoaded=(await page.locator('#rulesetText').inputValue()).trim().length>0;
    await page.locator('#runEvaluation').focus();await page.keyboard.press('Enter');
    await page.waitForFunction(()=>{const t=document.querySelector('#hashValue')?.textContent||'';return t!=='Not generated yet'&&t.trim().length>20},{timeout:8000}).catch(()=>{});
    r.actionProducedResult=(await page.locator('#hashValue').innerText()).trim()!=='Not generated yet';
   }else{
    await page.locator('#generateLedger').focus();await page.keyboard.press('Enter');
    await page.waitForFunction(()=>{const t=document.querySelector('#hashValue')?.textContent||'';return t!=='Not generated yet'&&t.trim().length>20},{timeout:8000}).catch(()=>{});
    r.actionProducedResult=(await page.locator('#hashValue').innerText()).trim()!=='Not generated yet';
   }
   r.liveRegions=await page.locator('[aria-live],[role="status"],[role="log"]').count();
   r.errors=errors;
   r.pass=r.http===200&&!r.missing.length&&r.liveRegions>0&&!errors.length&&
    (test.name==='aegis'?r.presetActivated&&r.errorVisible:r.actionProducedResult&&(test.name!=='governance'||r.demoLoaded));
  }catch(e){r.pass=false;r.error=String(e).slice(0,350)}
  console.log('REVIEW011_KEYBOARD '+JSON.stringify(r));results.push(r);
  await context.close();
 }
 await browser.close();
 fs.writeFileSync('services-review011-keyboard-results.json',JSON.stringify({observedAt:new Date().toISOString(),syntheticTraffic:true,results},null,2));
 if(results.some(x=>!x.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
