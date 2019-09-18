function createURL(city) {
  const baseURL =
    "https://api.darksky.net/forecast/e6a1c6141f4df0dfe90bc44355d277a6/";
  const lat = city.lat;
  const lon = city.lon;
  const options = "?units=si&lang=en";
  const finalURL = baseURL + lat + "," + lon + options;
  return finalURL;
}

module.exports = {
    createURL
}