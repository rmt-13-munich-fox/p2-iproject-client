import axios from "axios"

export default axios.create({
    baseURL : "http://localhost:3300"
    // baseURL : "https://munich-fox-livecode2.herokuapp.com/"
})