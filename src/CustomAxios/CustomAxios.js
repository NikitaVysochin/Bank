import axios from 'axios'

export const API = token  => axios.create( {
    baseURL:'http://localhost',
    headers:{
      'Authorization': `Bearer ${token}`
    }
  })
 