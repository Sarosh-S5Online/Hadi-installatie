const path = require('path');
module.paths.push(path.join(process.cwd(), 'node_modules'));
const puppeteer = require('puppeteer-core');

const file = process.argv[2] || 'index.html';
const outName = process.argv[3] || 'snapshot';

(async () => {
  const browser = await puppeteer.launch({ executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('file://' + path.resolve(file), { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.textContent = '.reveal{transition:none!important}';
    document.head.appendChild(style);
    document.querySelectorAll('.reveal').forEach(e => e.classList.add('in'));
    document.querySelectorAll('img[loading="lazy"]').forEach(img => img.loading = 'eager');
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join('verify-out', `${outName}-desktop.png`), fullPage: true });

  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
  await page.reload({ waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 300));
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.textContent = '.reveal{transition:none!important}';
    document.head.appendChild(style);
    document.querySelectorAll('.reveal').forEach(e => e.classList.add('in'));
  });
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: path.join('verify-out', `${outName}-mobile.png`), fullPage: true });

  await browser.close();
  console.log('done');
})();
