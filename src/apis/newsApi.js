import axios from "axios";

export default axios.create({
  baseURL: "https://smart-news-munich.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});
