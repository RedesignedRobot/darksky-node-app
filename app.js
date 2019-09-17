const r = require("request");

const url =
  "https://api.darksky.net/forecast/e6a1c6141f4df0dfe90bc44355d277a6/37.8267,-122.4233";

r({ url: url, json: true }, (e, r, b) => {
  const data = JSON.parse(r.body);
  console.log(data.currently.temperature);
});
