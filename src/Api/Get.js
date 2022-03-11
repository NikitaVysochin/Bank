import  axios, { API } from "../CustomAxios/CustomAxios";
import { createAsyncThunk } from '@reduxjs/toolkit'

 export const Get = createAsyncThunk(
  'cards/Get',
  async () => {
    return API.get('/cards/', { })
     .then((res) => {
       return res.data
     })
      .catch((err) => {
        if(err.response.status===401){
          API.post('/auth/jwt/refresh/', {
            refresh: localStorage.getItem("jwtRefresh")
          }, {
          }).then((res)=>{
            localStorage.setItem('jwtToken', res.data.access)
          })
        } else {
          console.log(err.response.status);
        }
        throw err.response.status
      })
  } 
)
