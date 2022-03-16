import axios from "axios"
import { API } from "../Interceptors/Interceptors"

export const API_URL = `http://localhost`

/*const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

$api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("jwtToken")}` 
  return config
})

export default $api*/

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${localStorage.getItem("jwtToken")}`
  return config;
}, function (error) {
  if(error.response.status === 401){
    axios.post('/auth/jwt/refresh/', {
      refresh: localStorage.getItem("jwtRefresh")
    }, {
    }).then((res)=>{ 
      localStorage.setItem('jwtToken', res.data.access)
    })
  }
})

axios.interceptors.response.use(function (res) {
  localStorage.setItem('jwtToken', res.data.access)
  localStorage.setItem('jwtRefresh', res.data.refresh)
  return res;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
})