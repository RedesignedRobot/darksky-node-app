const cities = require("all-the-cities");
var v = require("voca");
const r = require("request");

function forecast(city, callback) {
  const cityData = citySearch(String(city));
  if (cityData.name === "null") {
    const error = {
      code: 100,
      message: "City not found"
    };
    callback(error);
  } else {
    const url = createURL(citySearch(String(city)));
    r({ url: url, json: true }, (e, r, b) => {
      if (e) {
        const error = {
          code: 101,
          message: "Network error"
        };
        callback(error);
      } else if (b.error) {
        const error = {
          code: 101,
          message: "DarkSky API error"
        };
        callback(error);
      } else {
        const data = {
          name: cityData.name,
          temp: b.currently.temperature,
          humidity: b.currently.humidity
        };
        const error = {
          code: 0
        };
        callback(error, data);
      }
    });
  }
}

function createURL(city) {
  const { lat, lon } = city;
  const baseURL =
    "https://api.darksky.net/forecast/e6a1c6141f4df0dfe90bc44355d277a6/";
  const options = "?units=si&lang=en";
  const finalURL = baseURL + lat + "," + lon + options;
  return finalURL;
}

function citySearch(cityName) {
  var data = {
    lat: 0,
    lon: 0,
    name: "null"
  };
  const resultSet = cities.filter(city => {
    return city.name.match(v.titleCase(String(cityName)));
  });
  resultSet.sort((a, b) => (a.population > b.population ? -1 : 1));
  if (resultSet.length !== 0) {
    const resultCity = resultSet[0];
    const { lat, lon, name } = resultCity;
    data.lat = lat;
    data.lon = lon;
    data.name = name;
  }
  return data;
}

module.exports = {
  forecast
};
