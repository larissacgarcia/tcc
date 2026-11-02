import { chromium } from 'playwright';

async function runAudit() {
  const browser = await chromium.launch({ channel: 'msedge' });
  const viewports = [
    { name: 'Android Small', width: 360, height: 740 },
    { name: 'iPhone SE', width: 375, height: 667 },
    { name: 'iPhone 14', width: 390, height: 844 },
  ];

  for (const vp of viewports) {
    console.log(`\n========================================`);
    console.log(`AUDIT FOR VIEWPORT: ${vp.name} (${vp.width}x${vp.height})`);
    console.log(`========================================`);

    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();

    // 1. Audit Home Page
    await page.goto('http://localhost:5173/#home', { waitUntil: 'networkidle' });
    let pageOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    console.log(`Home Page - Horizontal Overflow: ${pageOverflow}`);

    // Check Home Hero CTAs
    const homeCtas = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      return btns.map(b => ({
        text: b.innerText.trim().replace(/\s+/g, ' '),
        w: b.offsetWidth,
        h: b.offsetHeight,
        sw: b.scrollWidth,
        cw: b.clientWidth
      })).filter(b => b.text.length > 0 && b.h > 20);
    });
    console.log(`Home Buttons count: ${homeCtas.length}`);
    homeCtas.forEach(b => {
      if (b.sw > b.cw || b.h > 60) {
        console.log(`  [Home CTA alert] "${b.text.slice(0, 30)}..." w=${b.w} h=${b.h} sw=${b.sw} cw=${b.cw}`);
      }
    });

    // 2. Audit Quiz Navigation & Step View
    await page.goto('http://localhost:5173/#quiz', { waitUntil: 'networkidle' });
    pageOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    console.log(`Quiz Page - Horizontal Overflow: ${pageOverflow}`);

    // Check quiz buttons on Question 1
    let quizBtns = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button, label'));
      return btns.map(b => ({
        tag: b.tagName,
        text: b.innerText.trim().replace(/\s+/g, ' '),
        w: b.offsetWidth,
        h: b.offsetHeight,
        sw: b.scrollWidth,
        cw: b.clientWidth
      })).filter(b => b.text.length > 0 && b.h > 20);
    });
    
    // Step through the quiz to reach the last question and then results
    for (let step = 0; step < 7; step++) {
      // Click first option
      const firstOption = await page.$('input[type="radio"]');
      if (firstOption) {
        await firstOption.click();
      }
      
      const nextBtn = await page.$('button[type="submit"]');
      if (nextBtn) {
        const btnInfo = await nextBtn.evaluate(b => ({
          text: b.innerText.trim().replace(/\s+/g, ' '),
          w: b.offsetWidth,
          h: b.offsetHeight,
          sw: b.scrollWidth,
          cw: b.clientWidth
        }));
        if (step === 6) {
          console.log(`Question 7 (Final) Submit Button: "${btnInfo.text}" w=${btnInfo.w} h=${btnInfo.h} sw=${btnInfo.sw} cw=${btnInfo.cw}`);
        }
        await nextBtn.click();
      }
    }

    // Now on Results Page
    await page.waitForTimeout(500);
    pageOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    console.log(`Results Page - Horizontal Overflow: ${pageOverflow}`);

    const resultBtns = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button, a'));
      return btns.map(b => ({
        tag: b.tagName,
        text: b.innerText.trim().replace(/\s+/g, ' '),
        w: b.offsetWidth,
        h: b.offsetHeight,
        sw: b.scrollWidth,
        cw: b.clientWidth
      })).filter(b => b.text.length > 0 && b.h > 20);
    });

    console.log(`Results Page Buttons count: ${resultBtns.length}`);
    resultBtns.forEach(b => {
      if (b.sw > b.cw || b.h > 55) {
        console.log(`  [Result Button alert] "${b.text.slice(0, 35)}..." w=${b.w} h=${b.h}`);
      }
    });

    await page.screenshot({ path: `audit-result-${vp.name.replace(/\s+/g, '_')}.png`, fullPage: false });
    await context.close();
  }

  await browser.close();
  console.log('\nAudit completed successfully!');
}

runAudit().catch(console.error);
