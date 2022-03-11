import axios from 'axios';
 
export const API =   axios.create(  {
    baseURL:'http://localhost',
    headers:{
      'Authorization': `Bearer ${localStorage.getItem("jwtToken")}`
    }
  })
 