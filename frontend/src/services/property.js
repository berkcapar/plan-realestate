import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "http://api.planrealestate.com";
const baseUrl = `${API_URL}/api/admin/properties`;

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
  console.log(token);
};

const addProperty = async (formData) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, formData, config);
  return response.data;
};

const getProperties = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(baseUrl, config);
  return response.data;
};

const deleteProperty = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

const searchProperty = async (searchData) => {
  const response = await axios.get(`${baseUrl}/search`, { params: searchData });
  return response.data;
};

// properties
// properties/:propertyId
// properties/:propertyId/airports
// -- properties/:propertyId/airports/:airportId -- ignore
const fetchAirports = async (propertyId) => {
  console.log(`${baseUrl}/${propertyId}/airports`);
  const response = await axios.get(`${baseUrl}/${propertyId}/airports`);
  return response.data;
};

export default {
  addProperty,
  setToken,
  getProperties,
  deleteProperty,
  searchProperty,
  fetchAirports,
};
