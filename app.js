const r = require("request");
const u = require("./utils");
const c = require("./cout");


const city = u.citySearch(u.getCity());

const url = u.createURL(city);

c.print("Getting weather for " + city.name);
r({ url: url, json: true }, (e, r, b) => {
  console.table(b.currently);
});
