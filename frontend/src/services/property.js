import axios from "axios";
const baseUrl = "api/admin/properties";

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

export default { addProperty, setToken, getProperties, deleteProperty };
