import  axios, { API } from "../../CustomAxios/CustomAxios"

export const RefreshToken = (promise) => {
  return promise.catch((err) => {
    if(err.response.status===401){
      API.post('/auth/jwt/refresh/', {
        refresh: localStorage.getItem("jwtRefresh")
      }, {
      }).then((res)=>{
        localStorage.setItem('jwtToken', res.data.access)
      })
    }
  })
}