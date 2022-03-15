import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../CustomAxios/CustomAxios';
import { Delete } from '../feature/counter/BankSlice';

export const DeleteCards = createAsyncThunk<any, string>(
  'cards/DeleteCards',
  async (uuid: string, {dispatch}) => {
    const result = await API(localStorage.getItem("jwtToken")).delete(`/cards/${uuid}` )
      .then(() => {
        dispatch(Delete(uuid))
      })
      .catch((err) => {
        if(err.response.status===401){
          API(localStorage.getItem("jwtToken")).post('/auth/jwt/refresh/', {
            refresh: localStorage.getItem("jwtRefresh")
          }, {
          }).then((res)=>{ 
            localStorage.setItem('jwtToken', res.data.access)
          })
        }

        throw err
      })
      return result
  }
)