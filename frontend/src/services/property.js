import axios from "axios"
const baseUrl = "api/admin/properties"

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
  console.log(token)
}

const addProperty = async (option,propertyType,title,city,price,m2,roomnumber) =>{
    const config = {
        headers: { Authorization: token },
      }
    const object = {option,propertyType,title,city,price,m2,roomnumber};
    const response = await axios.post(baseUrl, object,config)
    return response.data
}

const getProperties = async () => {
const config = {
    headers: {Authorization: token},
}
const response = await axios.get(baseUrl, config)
return response.data
}

export default {addProperty, setToken, getProperties}