import axios from "axios";

const API_KEY = process.env.REACT_APP_AIRPORT_API_KEY;

const closestAirport = async ({ location }) => {
  console.log(location);
  const { lat, lng } = location;

  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}${lng}&radius=1500&type=airport&keyword=cruise&key=${API_KEY}`
  );

  return response.data;
};

export default { closestAirport };
