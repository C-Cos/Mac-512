const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

const url = "https://www.apple.com/fr/shop/refurbished/mac/macbook-air-16-go";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "load", timeout: 0 });
  const el = await page.evaluate(
    "rf-refurb-category-grid-no-js > a",
    (res) => res
  );
  //   const r = await page.$eval("#facet-macbookair", (element) => {
  //     return element;
  //   });
  console.log(el);
  await browser.close();
})();
