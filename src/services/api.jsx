import axios from "axios"

const api = axios.create({
  baseURL: `http://api.weatherapi.com/v1/`,
  timeout: 5000,
})

export default api
