const r = require("request");
const u = require("./utils");
const c = require("./cout");

const city = u.citySearch(u.getCity());

const url = u.createURL(city);

c.print("Getting weather for " + city.name);

r({ url: url, json: true }, (e, r, b) => {
  if (e) {
    c.red("Network request error. Please make sure you have network access.");
    console.log(e);
  } else if(b.error){
    c.red("Darksky API error. You could try again later...");
    c.yellow("API used: "+ url);
    console.log(b.error);
  }
  else {
    console.table(b.currently);
  }
});
