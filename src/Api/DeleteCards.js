import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../CustomAxios/CustomAxios';
import { Delete } from '../feature/counter/BankSlice';

export const DeleteCards = createAsyncThunk(
  'cards/DeleteCards',
  async (uuid, {dispatch}) => {
    return API.delete(`/cards/${uuid}` )
      .then(res => {
        console.log(res);
        dispatch(Delete(uuid))
      })
      .catch((err) => {
        if(err.response.status===401){
          API.post('/auth/jwt/refresh/', {
            refresh: localStorage.getItem("jwtRefresh")
          }, {
          }).then((res)=>{ 
            localStorage.setItem('jwtToken', res.data.access)
          })
        }

        throw err
      })
  }
)