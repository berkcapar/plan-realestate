import axios from "axios";

const baseUrl = "api/admin/contactform";

const sendForm = async (formData) => {
  const response = await axios.post(baseUrl, formData);
  return response.data;
};

export default { sendForm };
