import axios from 'axios'

export default axios.create({
  baseURL: 'https://covid-base-8.herokuapp.com/'
})
