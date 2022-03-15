import  axios, { API } from "../CustomAxios/CustomAxios"
import toast, { Toaster } from 'react-hot-toast'
import { RefreshToken } from '../Api/RefreshToken/RefreshToken'


export const Transfer = (state, action) => {
  const notify = () => toast('Перевод выполнен')
  const { from_card, to_card, amount, type } = action.payload
  RefreshToken(API(localStorage.getItem("jwtToken")).post('/transactions/', {
    from_card,
    to_card,
    amount,
    type
  }, {
  }).then(res => {
    notify()
  }).catch(err=>{
    if(err.err.response.status===400){
      
    }
  }))
}