const cheerio = require("cheerio");

const url = "https://www.apple.com/fr/shop/refurbished/mac/macbook-air-16-go";

(async () => {
  const $ = await cheerio.fromURL(url);
  let items = $(".rf-refurb-category-grid-no-js h3 a")
    .map(function () {
      return $(this).text();
    })
    .toArray();
  return items.filter((v) => v.includes("Air") && v.includes("13"));
})();
