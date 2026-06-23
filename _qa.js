const { chromium } = require('playwright');
const sleep = ms => new Promise(r=>setTimeout(r,ms));
const URL='https://fx-sweepers.vercel.app/';
(async () => {
  const b = await chromium.launch({ args:['--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader'] });
  const ctx = await b.newContext({ viewport:{width:390,height:844}, deviceScaleFactor:2, isMobile:true, hasTouch:true, userAgent:'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1' });
  const p = await ctx.newPage();
  const errs={};
  let cur='home';
  p.on('pageerror',e=>{ (errs[cur]=errs[cur]||[]).push('ERR '+e.message); });
  p.on('requestfailed',r=>{ var u=r.url(); if(!u.includes('.state.json')) (errs[cur]=errs[cur]||[]).push('REQFAIL '+u.split('/').pop()); });
  async function go(y){ await p.evaluate(yy=>window.scrollTo(0,yy), y); await sleep(900); }
  async function nav(lbl){ await p.evaluate(()=>{var bg=document.querySelector('[data-burger]'); if(bg) bg.click();}); await sleep(500);
    await p.evaluate(l=>{ var a=[...document.querySelectorAll('a')].filter(x=>x.textContent.trim()===l && x.offsetParent!==null); if(a[0])a[0].click(); }, lbl); await sleep(2500); }
  await p.goto(URL,{waitUntil:'networkidle'}).catch(e=>{}); await sleep(3500);
  await go(0); await p.screenshot({path:'qa-m-home-top.png'});
  await go(2400); await p.screenshot({path:'qa-m-home-cards.png'});
  cur='about'; await nav('About'); await go(0); await p.screenshot({path:'qa-m-about.png'}); await go(1400); await p.screenshot({path:'qa-m-about2.png'});
  cur='services'; await nav('Services'); await go(700); await p.screenshot({path:'qa-m-services.png'});
  cur='equipment'; await nav('Equipment'); await go(500); await p.screenshot({path:'qa-m-equip.png'});
  cur='contact'; await nav('Contact'); await go(400); await p.screenshot({path:'qa-m-contact.png'});
  console.log('ERRORS:', JSON.stringify(errs));
  await b.close();
})();
