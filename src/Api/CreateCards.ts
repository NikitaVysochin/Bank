import { API } from "../CustomAxios/CustomAxios"
import { RefreshToken } from './RefreshToken/RefreshToken'
import toast, { Toaster } from 'react-hot-toast'

export const CreateCards = (state, action) => {
  const notify = () => toast('Карта рождена')
  const { name, account, amount, cvv, number, date_expire } = action.payload
  RefreshToken(API(localStorage.getItem("jwtToken")).post('/cards/', {
    name,
    account,
    amount,
    cvv,
    number,
    date_expire
    }, {
  }).then(res => {
    notify()
  }))
}