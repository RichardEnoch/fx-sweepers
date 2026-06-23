const { chromium } = require('playwright');
const sleep = ms => new Promise(r=>setTimeout(r,ms));
(async () => {
  const b = await chromium.launch({ args:['--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader'] });
  const ctx = await b.newContext({ viewport:{width:390,height:844}, deviceScaleFactor:2, isMobile:true, hasTouch:true });
  const p = await ctx.newPage();
  await p.goto('https://fx-sweepers.vercel.app/',{waitUntil:'networkidle'}).catch(()=>{}); await sleep(3500);
  // FAQ: scroll to it, open first
  var h = await p.evaluate(()=>document.body.scrollHeight);
  await p.evaluate(()=>{ var b=[...document.querySelectorAll('.faqq')]; if(b[0]){ b[0].scrollIntoView({block:'center'}); b[0].click(); } }); await sleep(800);
  await p.screenshot({path:'qa-m-faq.png'});
  await p.evaluate(()=>window.scrollTo(0,document.body.scrollHeight)); await sleep(1500);
  await p.evaluate(()=>window.scrollTo(0,document.body.scrollHeight)); await sleep(1200);
  await p.screenshot({path:'qa-m-footer.png'});
  await b.close(); console.log('done');
})();
