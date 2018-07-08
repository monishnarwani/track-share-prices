const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://syncup.focalworks.in');
  await page.setViewport({width: 1440, height: 900})
  await page.screenshot({path: new Date().getTime() + '_syncup.png'});

  await browser.close();
}

getPic();
