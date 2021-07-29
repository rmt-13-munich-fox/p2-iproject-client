import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:3000'
  // baseURL: 'https://webchat-ver1.herokuapp.com'
})
