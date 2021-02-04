import axios from "axios";

const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "http://api.planrealestate.com";
const baseUrl = `${URL}/api/email`;

const sendMail = async (name, email, about) => {
  const object = { name, email, about };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

export default { sendMail };
