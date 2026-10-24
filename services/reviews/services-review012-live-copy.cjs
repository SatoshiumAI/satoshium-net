const {chromium}=require('playwright');
const fs=require('fs');
const tests=[
  {name:'services-hub',url:'https://satoshium.net/services/',fragments:[
    'These unsigned records',
    'do not authenticate their issuer',
    'claimed local reference identifiers',
    'does not certify actions, authenticate issuers, or write to Bitcoin'
  ]},
  {name:'governance',url:'https://satoshium.net/services/agent-governance/tool.html',fragments:[
    'public browser reference tool',
    'do not authenticate their issuer, certify an agent, or authorize execution'
  ]},
  {name:'ledger',url:'https://satoshium.net/services/verification-ledger/tool.html',fragments:[
    'unsigned references do not authenticate an issuer',
    'Verification-ready (local flag, not Bitcoin anchoring)',
    'not a confirmed external transaction or Bitcoin anchor',
    'does not submit ledger records to a Satoshium backend'
  ]}
];
(async()=>{
 const browser=await chromium.launch();
 const results=[];
 for(const t of tests){
   const p=await browser.newPage({viewport:{width:1280,height:850}});
   const errors=[];p.on('pageerror',e=>errors.push(e.message));
   try{
     const res=await p.goto(t.url,{waitUntil:'domcontentloaded',timeout:30000});
     const text=await p.locator('body').innerText();
     const fragments=t.fragments.map(value=>({phrase:value,found:text.includes(value)}));
     const check={page:t.name,status:res.status(),fragments,jsErrors:errors,pass:res.status()===200&&fragments.every(x=>x.found)&&errors.length===0};
     results.push(check);console.log('REVIEW012_COPY '+JSON.stringify(check));
   }catch(e){const check={page:t.name,error:String(e).slice(0,300),pass:false};results.push(check);console.log('REVIEW012_COPY '+JSON.stringify(check))}
   await p.close();
 }
 await browser.close();
 fs.writeFileSync('services-review012-live-copy.json',JSON.stringify({observedAt:new Date().toISOString(),source:'live rendered public pages',results},null,2));
 if(results.some(r=>!r.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
