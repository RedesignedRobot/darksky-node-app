const r = require("request");
const u = require("./utils");
const readline = require("readline-sync");

const cityName = readline.question("City name: ");

const url = u.createURL(u.citySearch(String(cityName)));

r({ url: url, json: true }, (e, r, b) => {
  // console.log(b.currently.temperature);
  console.table(b.currently);
});
