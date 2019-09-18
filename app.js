const r = require("request");

const url =
  "https://api.darksky.net/forecast/e6a1c6141f4df0dfe90bc44355d277a6/37.8267,-122.4233?units=si&lang=en";

r({ url: url, json: true }, (e, r, b) => {
  console.log(b.currently.temperature);
});
