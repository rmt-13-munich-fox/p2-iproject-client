import axios from 'axios'

export default axios.create({
  // baseURL: 'https://movie-app-for-customer.herokuapp.com'
  baseURL: 'http://localhost:3000'
})
