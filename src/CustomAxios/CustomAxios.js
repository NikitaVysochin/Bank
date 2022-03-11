import axios from 'axios';

 
console.log(localStorage.getItem("jwtToken"),'api');
export const API = token  => axios.create(  {
    baseURL:'http://localhost',
    headers:{
      'Authorization': `Bearer ${token}`
    }
  })
 