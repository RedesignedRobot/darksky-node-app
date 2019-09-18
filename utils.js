const cities = require("all-the-cities");
const c = require("./cout");
const readline = require("readline-sync");
var v = require('voca');

function createURL(city) {
  const baseURL =
    "https://api.darksky.net/forecast/e6a1c6141f4df0dfe90bc44355d277a6/";
  const lat = city.lat;
  const lon = city.lon;
  const options = "?units=si&lang=en";
  const finalURL = baseURL + lat + "," + lon + options;
  return finalURL;
}

function citySearch(cityName) {
  const resultSet = cities.filter(city => {
    return city.name.match(v.titleCase(String(cityName)));
  });
  c.yellow("Please a city from below.");
  console.table(resultSet);
  const index = readline.question("Please enter the index number: ");
  return resultSet[index];
}

module.exports = {
  createURL,
  citySearch,
};
