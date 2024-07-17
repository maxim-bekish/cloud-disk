import axios from 'axios';
import { setUser } from '../redux/sliceUser';
const URL = "http://localhost:5000/api/auth"
export const registration = async (email, password) => {

   try {
      const response = await axios.post(`${URL}/registration`, { email, password })
      alert(response.data.message)
   } catch (error) {
      alert(error.response.data.message)
   }
}

export const login = (email, password) => {
   return async dispatch => {
      try {
         const response = await axios.post(`${URL}/login`, { email, password })
         dispatch(setUser(response.data.user))
         localStorage.setItem('token', response.data.token)
         console.log(response.data)
      } catch (error) {
         alert(error.response.data.message)
      }
   }
}

export const auth = () => {
   return async dispatch => {
      try {
         const response = await axios.get(`${URL}/auth`, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`
            }
         })
         dispatch(setUser(response.data.user))
         localStorage.setItem('token', response.data.token)

      } catch (error) {
         console.log(error)
         alert(error.response.data.message);
         localStorage.removeItem('token')
      }
   }
}