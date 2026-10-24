const {chromium}=require('playwright');
const fs=require('fs');
const base='https://satoshium.net/services/';
const checks=[
 {name:'aegis',path:'aegis/aegis-service-panel.html',button:'#runInspection',live:'#responseOutput',setup:async p=>{await p.locator('#actors').fill('');},match:'actorIds required'},
 {name:'governance',path:'agent-governance/tool.html',button:'#runEvaluation',live:'#statusWrap',setup:async p=>{await p.locator('#loadDemo').click();},match:''},
 {name:'ledger',path:'verification-ledger/tool.html',button:'#generateLedger',live:'#results',setup:async p=>{},match:''}
];
const results=[];
(async()=>{
 const browser=await chromium.launch();
 for(const item of checks){
  const ctx=await browser.newContext({viewport:{width:1280,height:800}}),p=await ctx.newPage();
  p.setDefaultTimeout(9000);
  let r={page:item.name};
  const errs=[];p.on('pageerror',e=>errs.push(e.message));
  try{
   r.http=(await p.goto(base+item.path,{waitUntil:'domcontentloaded',timeout:25000})).status();
   r.live=await p.locator(item.live).evaluate(e=>({role:e.getAttribute('role'),live:e.getAttribute('aria-live')}));
   await item.setup(p);
   await p.evaluate(sel=>{const target=document.querySelector(sel);window.__review011Mutations=[];new MutationObserver(changes=>{window.__review011Mutations.push(...changes.map(x=>x.type))}).observe(target,{subtree:true,childList:true,characterData:true,attributes:true})},item.live);
   const before=await p.locator(item.live).innerText();
   await p.locator(item.button).click();
   await p.waitForTimeout(700);
   const after=await p.locator(item.live).innerText();
   r.changed=before!==after;
   r.mutationCount=await p.evaluate(()=>window.__review011Mutations.length);
   r.expectedResult=item.match?after.includes(item.match):r.changed;
   r.dynamicPass=r.http===200&&r.changed&&r.expectedResult&&r.mutationCount>0;
   r.reflow=[];
   for(const width of [320,640]){
    await p.setViewportSize({width,height:800});
    const data=await p.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,overflow:document.documentElement.scrollWidth>innerWidth+5}));
    r.reflow.push(data);
   }
   r.pageErrors=errs;
   r.pass=r.dynamicPass&&!errs.length&&r.reflow.every(x=>!x.overflow);
  }catch(e){r.pass=false;r.error=String(e).slice(0,300)}
  results.push(r);console.log('REVIEW011_DYNAMIC '+JSON.stringify(r));
  await ctx.close();
 }
 await browser.close();
 fs.writeFileSync('services-review011-dynamic-results.json',JSON.stringify({observedAt:new Date().toISOString(),syntheticTraffic:true,limitations:['DOM mutation is not screen-reader announcement verification','viewport reflow is not actual browser zoom'],results},null,2));
 if(results.some(x=>!x.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
