const r = require("request");
const cities = require("all-the-cities");
const u = require("./utils");

const dubai = cities.filter(city => {
  return city.name.match("Dubai");
});

const url = u.createURL(dubai[0]);

r({ url: url, json: true }, (e, r, b) => {
  console.log(b.currently.temperature);
});
