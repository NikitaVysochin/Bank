import { API } from "../CustomAxios/CustomAxios"
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ICard } from "../components/MainPage/PayCards/PayCards"
import axios from "axios"

 export const Get = createAsyncThunk(
  'cards/Get',
  async () => { 
     return API(localStorage.getItem("jwtToken")).get<ICard[]>('/cads/', { })
     .then((res) => {
       return res.data
     })
      .catch((err) => {
        if(err.response.status===401){ 
          axios.post('/auth/jwt/refresh/', {
            refresh: localStorage.getItem("jwtRefresh")
          }, {
          }).then((res)=>{
            localStorage.clear()
            localStorage.setItem('jwtToken', res.data.access)
            localStorage.setItem('jwtRefersh', res.data.refresh)
          })
        } else { 
          console.log(err.response.status)
        } 
        console.log(err.response.status);
        throw err.response.status
      })
  } 
)
