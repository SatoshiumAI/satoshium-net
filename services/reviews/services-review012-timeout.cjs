const {chromium}=require('playwright'),fs=require('fs');
(async()=>{
 const browser=await chromium.launch();const results=[];
 for(const mode of ['stalled','successful']){
  const ctx=await browser.newContext();const p=await ctx.newPage();p.setDefaultTimeout(17000);
  const failures=[];p.on('pageerror',e=>failures.push(e.message));
  let hits=0;
  try{
   await p.route('https://api.satoshium.net/**',async route=>{
    hits++;
    if(mode==='stalled') return new Promise(()=>{});
    return route.fulfill({status:200,contentType:'application/json',body:'{"service":"mock","data":{"ok":true}}'});
   });
   await p.goto('https://satoshium.net/services/aegis/aegis-service-panel.html',{waitUntil:'domcontentloaded',timeout:20000});
   const begin=Date.now();await p.locator('#runInspection').click();
   await p.waitForFunction(()=>{
    const el=document.querySelector('#runInspection');return el&&!el.disabled&&el.textContent==='Run Inspection'&&document.querySelector('#responseOutput')?.textContent!=='Loading...';
   },null,{timeout:15000});
   const elapsed=Date.now()-begin;
   const output=JSON.parse(await p.locator('#responseOutput').innerText());
   const pass=hits===1&&!failures.length&&(mode==='stalled'?output.error==='Request timed out'&&elapsed>=9000&&elapsed<=14500:output.service==='mock');
   const row={mode,hits,elapsed,error:output.error||null,enabled:await p.locator('#runInspection').isEnabled(),failures,pass};
   results.push(row);console.log('REVIEW012_TIMEOUT '+JSON.stringify(row));
  }catch(e){const row={mode,pass:false,error:String(e).slice(0,330)};results.push(row);console.log('REVIEW012_TIMEOUT '+JSON.stringify(row))}
  await ctx.close();
 }
 await browser.close();
 fs.writeFileSync('services-review012-timeout-results.json',JSON.stringify({observedAt:new Date().toISOString(),mockedAPI:true,results},null,2));
 if(results.some(x=>!x.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
