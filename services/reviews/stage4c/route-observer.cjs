'use strict';
// Stage 4C: read-only public browser observations; NO release PASS inference.
// GET-only Playwright navigations, no clicks, form submissions, logins, credentials, or mutations.
const fs=require('node:fs');
const {chromium}=require('playwright');
const urls=[
 {id:'S-01',path:'/suite/',expectedTitle:'Satoshium Suite'},
 {id:'S-02',path:'/suite/status/',expectedTitle:'Satoshium Suite · Status'},
 {id:'S-03',path:'/suite/interoperability/',expectedTitle:'Satoshium Suite Interoperability'},
 {id:'S-04',path:'/suite/governance/',expectedTitle:'Satoshium Suite · Governance'}
];
const base='https://satoshium.us';
const evidence={schema:'stage4c-observations-v1',observedAt:new Date().toISOString(),sourcePin:'da8333ddb85face8ee499abe93ef4bc4f555e867',classification:'UNADJUDICATED_OBSERVATIONAL_HTTP_BROWSER_EVIDENCE',runtime:'GitHub-hosted Chromium 1.56.1',sourceIdentityVerified:false,liveReleaseAuthorized:false,results:[]};
const safeErr=e=>String(e&&e.message||e).slice(0,280);
async function inspect(browser,entry,device){
 const context=await browser.newContext({viewport:device==='mobile'?{width:390,height:844}:{width:1280,height:800},isMobile:device==='mobile',hasTouch:device==='mobile'});
 const page=await context.newPage(),errors=[],failed=[];
 page.on('pageerror',e=>errors.push(safeErr(e)));
 page.on('requestfailed',r=>failed.push({url:r.url().slice(0,230),failure:r.failure()?.errorText||'unknown'}));
 const record={id:entry.id,device,requested:base+entry.path,expectedTitle:entry.expectedTitle,observedAt:new Date().toISOString(),http:null,effectiveUrl:null,title:null,canonical:null,ogUrl:null,mainCount:null,h1:null,topbarLinks:null,topbarActive:null,topbarFound:false,overflow:null,focusedAfterTab:null,pageErrors:errors,failedRequests:failed,loadError:null,releaseAccepted:false};
 try{
   const response=await page.goto(record.requested,{waitUntil:'domcontentloaded',timeout:30000});
   record.http=response?.status()??null;
   await page.waitForTimeout(1600); // bounded time for async topbar; not networkidle guarantee
   record.effectiveUrl=page.url();
   record.title=await page.title();
   const collected=await page.evaluate(()=>{
     const canonical=document.querySelector('link[rel="canonical"]')?.getAttribute('href')||null;
     const ogUrl=document.querySelector('meta[property="og:url"]')?.getAttribute('content')||null;
     const all=[...document.querySelectorAll('nav')];
     const topbar=all.find(x=>x.querySelector('[data-nav]'))||null;
     const active=topbar?[...topbar.querySelectorAll('[data-nav]')].filter(x=>x.classList.contains('active')||x.getAttribute('aria-current')==='page').map(x=>x.getAttribute('data-nav')):[];
     return {canonical,ogUrl,mainCount:document.querySelectorAll('main').length,h1:document.querySelector('h1')?.textContent?.trim().slice(0,150)||null,topbarLinks:topbar?.querySelectorAll('a').length||0,topbarFound:!!topbar,topbarActive:active,overflow:document.documentElement.scrollWidth>window.innerWidth+5,innerWidth:window.innerWidth,scrollWidth:document.documentElement.scrollWidth};
   });
   Object.assign(record,collected);
   await page.keyboard.press('Tab');
   record.focusedAfterTab=await page.evaluate(()=>{const e=document.activeElement;return {tag:e?.tagName||null,href:e?.getAttribute('href')||null,text:e?.textContent?.trim().slice(0,80)||null}});
 }catch(e){record.loadError=safeErr(e);}
 await context.close();return record;
}
(async()=>{
 let browser;
 try{
  browser=await chromium.launch({headless:true});
  for(const e of urls)for(const device of ['desktop','mobile']){
   const result=await inspect(browser,e,device);
   evidence.results.push(result);
   console.log('STAGE4C_ROUTE_OBSERVATION '+JSON.stringify(result));
  }
 }catch(e){evidence.runnerError=safeErr(e);console.error('STAGE4C_RUNNER_ERROR '+evidence.runnerError);process.exitCode=1;}
 finally{
   if(browser)await browser.close();
   fs.writeFileSync('stage4c-observations.json',JSON.stringify(evidence,null,2)+'\n');
   const count=evidence.results.length;
   console.log('STAGE4C_OBSERVATION_SUMMARY '+JSON.stringify({routes:urls.length,attempts:count,http200:evidence.results.filter(x=>x.http===200).length,withErrors:evidence.results.filter(x=>x.loadError||x.pageErrors.length).length,sourceIdentityVerified:false,releaseAccepted:false}));
 }
})().catch(e=>{console.error(safeErr(e));process.exitCode=1});
