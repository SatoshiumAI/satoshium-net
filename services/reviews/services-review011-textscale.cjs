const {chromium}=require('playwright'),fs=require('fs');
const cases=[
 ['hub','/services/'],
 ['aegis','/services/aegis/aegis-service-panel.html'],
 ['governance','/services/agent-governance/tool.html'],
 ['ledger','/services/verification-ledger/tool.html']
];
const base='https://satoshium.net',results=[];
const requiredPercentages=[100,200];
const advisoryPercentages=[400];
(async()=>{
 const browser=await chromium.launch();
 for(const [name,path] of cases){
  for(const percent of [...requiredPercentages,...advisoryPercentages]){
   const context=await browser.newContext({viewport:{width:320,height:850}});
   const page=await context.newPage();
   const result={page:name,textSizePercent:percent,viewport:320,classification:requiredPercentages.includes(percent)?'required-proxy':'advisory-stress',method:'CSS inherited font-size simulation; not browser zoom'};
   const errors=[];page.on('pageerror',e=>errors.push(e.message));
   try{
    const response=await page.goto(base+path,{waitUntil:'domcontentloaded',timeout:25000});
    result.http=response.status();
    await page.evaluate(percent=>{document.documentElement.style.fontSize=percent+'%';document.body.style.removeProperty('font-size');},percent);
    await page.waitForTimeout(100);
    Object.assign(result,await page.evaluate(()=>{
      const root=document.documentElement;const body=document.body;
      const bad=[...document.querySelectorAll('body *')].filter(e=>{const b=e.getBoundingClientRect();return b.right>innerWidth+5 && getComputedStyle(e).position!=='fixed'}).slice(0,8).map(e=>({tag:e.tagName,selector:e.id?('#'+e.id):('.'+String(e.className).split(' ')[0]),right:Math.round(e.getBoundingClientRect().right)}));
      return {scrollWidth:root.scrollWidth,innerWidth,overflow:root.scrollWidth>innerWidth+5,font: getComputedStyle(body).fontSize,overflowElements:bad}
    }));
    result.pageErrors=errors;
    result.pass=result.http===200&&!result.overflow&&errors.length===0;
   }catch(e){result.pass=false;result.error=String(e).slice(0,250)}
   results.push(result);console.log('REVIEW011_TEXTSCALE '+JSON.stringify(result));
   await context.close();
  }
 }
 await browser.close();
 fs.writeFileSync('services-review011-textscale-results.json',JSON.stringify({observedAt:new Date().toISOString(),method:'CSS inherited font-size simulation at a 320px viewport; 100% is a reflow proxy and 200% is a text-resize proxy, not browser zoom, screen reader testing, or WCAG certification',syntheticTraffic:true,requiredPercentages,advisoryPercentages,requiredFailures:results.filter(r=>r.classification==='required-proxy'&&!r.pass).length,advisoryFailures:results.filter(r=>r.classification==='advisory-stress'&&!r.pass).length,results},null,2));
 if(results.some(r=>r.classification==='required-proxy'&&!r.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
