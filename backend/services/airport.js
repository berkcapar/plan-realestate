const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.AIRPORT_API_KEY;

const fetchClosestAirports = async (location) => {
  const { lat, lng } = location;

  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=airport&keyword=cruise&key=${API_KEY}`
  );

  return response.data;
};
module.exports = { fetchClosestAirports };
