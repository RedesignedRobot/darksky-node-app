const cities = require("all-the-cities");
const c = require("./cout");
const readline = require("readline-sync");
var v = require("voca");
const validator = require("validator");

function createURL(city) {
  const baseURL =
    "https://api.darksky.net/forecast/e6a1c6141f4df0dfe90bc44355d277a6/";
  const lat = city.lat;
  const lon = city.lon;
  const options = "?units=si&lang=en";
  const finalURL = baseURL + lat + "," + lon + options;
  return finalURL;
}

function getCity() {
  var cityName = readline.question("City name: ");

  if (validator.isEmpty(cityName) || cityName == " ") {
    c.red("Invalid city name. Using default Riyadh");
    cityName = "Riyadh";
  }
  return String(cityName);
}

function citySearch(cityName) {
  const resultSet = cities.filter(city => {
    return city.name.match(v.titleCase(String(cityName)));
  });
  if (resultSet.length == 0) {
    c.red("No city found. Please check your spelling or try another city.");
    process.exit(0);
  }
  c.yellow("Please choose a city from below.");
  resultSet.sort((a, b) => (a.population > b.population ? -1 : 1));
  console.table(resultSet);
  var input = readline.question("Please enter the index number (default 0): ");
  var index = 0;
  if (!isNaN(input)) {
    if (parseInt(input) >= 0) {
      index = parseInt(input);
    }
  } else if (isNaN(input)) {
    c.red("Invalid index. Using default value 0");
    index = 0;
  }

  return resultSet[index];
}

module.exports = {
  createURL,
  getCity,
  citySearch
};
