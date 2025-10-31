const cheerio = require("cheerio");

const urlMacBook =
  "https://www.apple.com/fr/shop/refurbished/mac/macbook-air-16-go";
const urlIphone = "https://www.apple.com/fr/shop/refurbished/iphone";

export const searchMacBookAir = async () => {
  const $ = await cheerio.fromURL(urlMacBook);
  let items = $(".rf-refurb-category-grid-no-js h3 a")
    .map(function () {
      return $(this).text();
    })
    .toArray();
  return items.filter((v) => v.includes("Air") && v.includes("13"));
};

export const searchIphone16 = async () => {
  const $ = await cheerio.fromURL(urlIphone);
  let items = $(".rf-refurb-category-grid-no-js h3 a")
    .map(function () {
      return $(this).text();
    })
    .toArray();
  console.log(items);
  return items.filter((v) => v.includes("16"));
};
