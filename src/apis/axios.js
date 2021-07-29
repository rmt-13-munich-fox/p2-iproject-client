import axios from 'axios'

const server = axios.create({
    baseURL: 'https://car-community.herokuapp.com'
})

export default server