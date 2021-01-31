import axios from "axios";

const baseUrl = "api/admin/properties/airports";

const sendLocation = async (lat, lang) => {
  const location = { lat, lang };

  const response = await axios.post(baseUrl, location);
  return response.data;
};

const getLocation = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { sendLocation, getLocation };
