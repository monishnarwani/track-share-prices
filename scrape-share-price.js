const puppeteer = require('puppeteer');

let scrape = async () => {
    // Actual Scraping goes Here...
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://google.com/search?q=google+share+price');
    await page.waitFor(1000);

    const result = await page.evaluate(() => {
        let title = document.querySelector('.NprOob').innerText;
        let time = new Date().toLocaleTimeString();
        let date = new Date().toLocaleDateString();

        return {
            title,
            time,
            date
        }

    });

    // Return a value
    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value); // Success!
});