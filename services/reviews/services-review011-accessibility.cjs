const {chromium}=require('playwright');
const {AxeBuilder}=require('@axe-core/playwright');
const fs=require('fs');
const base='https://satoshium.net';
const pages=[
 ['hub','/services/'],
 ['aegis','/services/aegis/aegis-service-panel.html'],
 ['governance','/services/agent-governance/tool.html'],
 ['ledger','/services/verification-ledger/tool.html']
];
const results=[];
(async()=>{
 const browser=await chromium.launch({headless:true});
 for(const [name,path] of pages){
  for(const width of [320,390,1280]){
   const context=await browser.newContext({viewport:{width,height:850}});
   const p=await context.newPage();
   p.setDefaultTimeout(8000);
   const errors=[];p.on('pageerror',e=>errors.push(String(e).slice(0,200)));
   const r={page:name,width,path};
   try{
    const response=await p.goto(base+path,{waitUntil:'domcontentloaded',timeout:25000});
    r.http=response.status();
    await p.waitForTimeout(250);
    r.overflow=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth+5);
    if(r.overflow)r.overflowSources=await p.evaluate(()=>[...document.querySelectorAll('body *')].map(e=>({tag:e.tagName,id:e.id,cls:String(e.className||'').slice(0,70),right:Math.round(e.getBoundingClientRect().right),scroll:e.scrollWidth})).filter(x=>x.right>innerWidth+5).slice(0,15));
    r.landmarks=await p.evaluate(()=>({main:document.querySelectorAll('main').length,h1:document.querySelectorAll('h1').length}));
    r.keyboard=[];
    for(let i=0;i<Math.min(width===1280?18:12,30);i++){
     await p.keyboard.press('Tab');
     const f=await p.evaluate(()=>{
      const x=document.activeElement;const s=x?getComputedStyle(x):null;
      return {tag:x?.tagName||'',id:x?.id||'',text:(x?.innerText||x?.getAttribute('aria-label')||'').slice(0,65),visible:!!x&&x!==document.body&&x.getClientRects().length>0,outline:s?.outlineStyle||'',outlineWidth:s?.outlineWidth||'',boxShadow:s?.boxShadow||''};
     });
     r.keyboard.push(f);
    }
    r.focusReached=r.keyboard.some(x=>x.visible);
    if(width===1280){
     const axe=await new AxeBuilder({page:p}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
     r.axe={violations:axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.length,examples:v.nodes.slice(0,2).map(n=>n.target)})),incomplete:axe.incomplete.map(v=>({id:v.id,nodes:v.nodes.length})),passes:axe.passes.length};
     r.liveRegions=await p.evaluate(()=>[...document.querySelectorAll('[aria-live], [role="status"],[role="alert"],[role="log"]')].map(e=>({tag:e.tagName,id:e.id,role:e.getAttribute('role'),live:e.getAttribute('aria-live')})));
    }
    r.pageErrors=errors;
    r.diagnosticComplete=r.http===200&&!errors.length&&r.focusReached;
   }catch(e){r.diagnosticComplete=false;r.error=String(e).slice(0,350)}
   results.push(r);console.log('REVIEW011 '+JSON.stringify(r));
   await context.close();
  }
 }
 await browser.close();
 fs.writeFileSync('services-review011-browser-results.json',JSON.stringify({observedAt:new Date().toISOString(),syntheticTraffic:true,results},null,2));
 if(results.some(r=>!r.diagnosticComplete))process.exitCode=1;
})().catch(e=>{console.error('REVIEW011_FATAL',e);process.exit(1)});
