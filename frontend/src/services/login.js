import axios from "axios"
const baseUrl = "/api/admin/login"

const login = async (email,password) => {
    const object = {email,password}
    const response = await axios.post(baseUrl,object)
    return response.data
}

export default { login }