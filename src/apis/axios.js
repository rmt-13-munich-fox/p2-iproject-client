import axios from "axios";

export default axios.create({
	baseURL: "https://weather-calendar-hacktiv.herokuapp.com",
});
