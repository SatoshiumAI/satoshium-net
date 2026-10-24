const {chromium}=require('playwright');
(async()=>{
 const browser=await chromium.launch();const cases=[['hub','https://satoshium.net/services/'],['aegis','https://satoshium.net/services/aegis/aegis-service-panel.html'],['governance','https://satoshium.net/services/agent-governance/tool.html'],['ledger','https://satoshium.net/services/verification-ledger/tool.html']];
 let ok=true;
 for(const [name,url] of cases){
  const page=await browser.newPage();const seen=[];
  page.on('request',r=>{try{const u=new URL(r.url());if(u.hostname==='satoshium.ai'){seen.push({path:u.pathname,method:r.method(),type:r.resourceType(),hasQuery:!!u.search});}}catch(e){}});
  let status=0;try{const res=await page.goto(url,{waitUntil:'domcontentloaded',timeout:30000});status=res.status();await page.waitForTimeout(1800);}catch(e){console.log('REVIEW013_PATH '+JSON.stringify({page:name,error:String(e).slice(0,200)}));ok=false}
  const result={page:name,status,requests:seen};console.log('REVIEW013_PATH '+JSON.stringify(result));if(status!==200||!seen.length)ok=false;await page.close();
 }
 await browser.close();if(!ok)process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
