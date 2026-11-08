'use strict';
// Stage 4D observational audit only: no form submissions, site modification, credentials or approval.
const fs=require('node:fs');
const {chromium}=require('playwright');
const base='https://satoshium.us';
const routes=[['S-01','/suite/'],['S-02','/suite/status/'],['S-03','/suite/interoperability/'],['S-04','/suite/governance/']];
const result={schema_version:'stage4d-v1',observed_at:new Date().toISOString(),source_pin:'da8333ddb85face8ee499abe93ef4bc4f555e867',classification:'OBSERVATIONS_ONLY_NOT_RELEASE_ACCEPTANCE',access:'READ_ONLY',routes:[],link_targets:[],release_accepted:false};
const err=e=>String(e?.message||e).slice(0,250);
(async()=>{
 const browser=await chromium.launch({headless:true});
 let page;
 try{
 const all=new Map();
 for(const [id,path] of routes){
  page=await browser.newPage({viewport:{width:390,height:844}});
  const errors=[];page.on('pageerror',e=>errors.push(err(e)));
  const row={id,path,http:null,source_same_at_runtime:'NOT_VERIFIED',heading_sequence:[],nav_links:[],links:[],empty_links:[],focus_walk:[],errors,load_error:null,claimed_universal_automation:false,phrases:[]};
  try{
    const rsp=await page.goto(base+path,{waitUntil:'domcontentloaded',timeout:25000});
    row.http=rsp.status();
    await page.waitForTimeout(1000);
    const data=await page.evaluate(()=>{
     const all=[...document.querySelectorAll('a[href]')];
     const links=all.map(a=>({href:a.getAttribute('href'),text:(a.innerText||a.getAttribute('aria-label')||'').trim().slice(0,100)}));
     const txt=document.body.innerText;
     return {headings:[...document.querySelectorAll('h1,h2,h3')].map(e=>({level:e.tagName,text:e.innerText.trim().slice(0,110)})),links,emptyLinks:all.filter(a=>!a.innerText.trim()&&!a.getAttribute('aria-label')&&!a.querySelector('img[alt]')).map(a=>a.getAttribute('href')),phrases:['Production-Proven Interoperability','Established and Production-Proven','End-to-End Operational Dry Run Passed','Operational Release Complete'].filter(p=>txt.includes(p))};
    });
    row.heading_sequence=data.headings;
    row.links=data.links;
    row.empty_links=data.emptyLinks;
    row.phrases=data.phrases;
    for(const link of data.links){
      try{const u=new URL(link.href,base+path);if(u.origin===base && /^https?:$/.test(u.protocol))all.set(u.href.split('#')[0],{url:u.href.split('#')[0],source_ids:[id]});}catch(e){}
    }
    for(let i=0;i<8;i++){
      await page.keyboard.press('Tab');
      const focus=await page.evaluate(()=>{
       const el=document.activeElement;const style=el?getComputedStyle(el):null;
       const r=el?.getBoundingClientRect();
       return {tag:el?.tagName||null,href:el?.getAttribute('href')||null,text:el?.innerText?.trim().slice(0,80)||null,focusVisible:!!el?.matches(':focus-visible'),rectInViewport:!!r&&r.width>0&&r.height>0&&r.right>0&&r.left<innerWidth&&r.bottom>0&&r.top<innerHeight,outlineStyle:style?.outlineStyle||null,outlineWidth:style?.outlineWidth||null};
      });
      row.focus_walk.push(focus);
    }
   }catch(e){row.load_error=err(e);}
   result.routes.push(row);
   console.log('STAGE4D_ROUTE '+JSON.stringify({id,path,http:row.http,links:row.links.length,emptyLinks:row.empty_links.length,focus:row.focus_walk.length,errors:row.errors,loadError:row.load_error,phrases:row.phrases}));
   await page.close();page=null;
 }
 // Only same-origin link targets found on the four pages. GET/HEAD browser calls only; never external apps.
 const targets=[...all.values()].sort((a,b)=>a.url.localeCompare(b.url));
 for(const entry of targets){
  const o={url:entry.url,status:null,effective:null,error:null};
  try{
    const response=await browser.newPage();
    try{
      const r=await response.goto(entry.url,{waitUntil:'domcontentloaded',timeout:16000});
      o.status=r?.status()??null;o.effective=response.url();
    }finally{await response.close();}
  }catch(e){o.error=err(e);}
  result.link_targets.push(o);
  console.log('STAGE4D_LINK '+JSON.stringify(o));
 }
 }finally{
  if(page)await page.close().catch(()=>{});
  await browser.close();
  fs.writeFileSync('stage4d-evidence.json',JSON.stringify(result,null,2)+'\n');
  console.log('STAGE4D_SUMMARY '+JSON.stringify({routes:result.routes.length,linkTargets:result.link_targets.length,linkHttp200:result.link_targets.filter(x=>x.status===200).length,linkOther:result.link_targets.filter(x=>x.status!==200).length,emptyLinkCount:result.routes.reduce((n,x)=>n+x.empty_links.length,0),releaseAccepted:false}));
 }
})().catch(e=>{console.error('STAGE4D_RUNNER_ERROR',err(e));process.exitCode=1});
