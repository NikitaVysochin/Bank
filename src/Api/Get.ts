import { API } from "./Interceptors/Interceptors"
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ICard } from "../components/MainPage/PayCards/PayCards"
import { api } from './Interceptors/Interceptors'
import axios from "axios"

 export const Get = createAsyncThunk(
  'cards/Get',
  async () => { 
    const result = await api.get<ICard[]>('/cards/', { })
    console.log('get', result);
    
      return result.data
    
     /*return API(localStorage.getItem("jwtToken")).get<ICard[]>('/cards/', { })
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
        }
        throw err.response.status
      })*/
  } 
)
