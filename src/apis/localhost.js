import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:10000"
  baseURL: "https://app-to-date.herokuapp.com/"
});
