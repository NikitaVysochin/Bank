import { api } from "./Interceptors/Interceptors"
import toast from 'react-hot-toast'

export const Transfer = (state, action) => {
  const notify = () => toast('Перевод выполнен')
  const { from_card, to_card, amount, type } = action.payload
  api.post('/transactions/', {
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
  })
}