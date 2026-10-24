const {chromium}=require('playwright');
const fs=require('fs');
const base='https://satoshium.net';
(async()=>{
 const browser=await chromium.launch({headless:true});
 const results=[];
 const paths=[
  ['/services/aegis/aegis-service-panel.html','Aegis'],
  ['/services/agent-governance/tool.html','Governance'],
  ['/services/verification-ledger/tool.html','Ledger']
 ];
 for(const mobile of [false,true]){
  const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1280,height:850},isMobile:mobile,hasTouch:mobile});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const response=await page.goto(base+'/services/',{waitUntil:'domcontentloaded',timeout:25000});
  const item={case:mobile?'mobile':'desktop',http:response.status(),heading:await page.locator('#service-picker-heading').innerText(),choices:await page.locator('.service-choice').count(),errors};
  item.overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+5);
  item.actions=[];
  for(const [path,name] of paths){
   const link=page.locator('.service-choice a.service-action[href="'+path+'"]');
   const visible=await link.isVisible();
   const href=await link.getAttribute('href');
   const page2=await browser.newPage();
   let status=null,title='',error=null;
   try{const r=await page2.goto(base+href,{waitUntil:'domcontentloaded',timeout:25000});status=r.status();title=await page2.title()}catch(e){error=String(e).slice(0,170)}
   item.actions.push({name,href,visible,status,title,error});
   await page2.close();
  }
  results.push(item);console.log('SERVICES_CTA_AUDIT '+JSON.stringify(item));await page.close();
 }
 await browser.close();
 fs.writeFileSync('services-cta-audit.json',JSON.stringify({results,observedAt:new Date().toISOString()},null,2));
})().catch(e=>{console.error(e);process.exit(1)});