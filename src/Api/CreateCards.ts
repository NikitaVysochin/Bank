import { API } from "./Interceptors/Interceptors"
import { api } from './Interceptors/Interceptors'
import toast from 'react-hot-toast'

export const CreateCards = (state, action) => {
  const notify = () => toast('Карта рождена')
  const { name, account, amount, cvv, number, date_expire } = action.payload
  api.post('/cards/', {
    name,
    account,
    amount,
    cvv,
    number,
    date_expire
    }, {
  }).then(res => {
    notify()
  })
}