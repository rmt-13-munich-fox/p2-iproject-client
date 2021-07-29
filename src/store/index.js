import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/axios.js";
import firebase from "firebase/app";
import "firebase/messaging";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isLoggedIn: false,
		upcomingEvents: [],
		weather: null,
	},
	mutations: {
		CHECK_LOGIN(state) {
			let access_token = localStorage.getItem("access_token");
			if (access_token) {
				state.isLoggedIn = true;
			} else {
				state.isLoggedIn = false;
			}
		},
		LOGIN_GOOGLE(state, token) {
			localStorage.setItem("access_token", token);
			state.isLoggedIn = true;
		},
		GET_WEATHER_DATA(state, weatherData) {
			state.weather = weatherData.data;
		},
		GET_CALENDAR(state, calendarData) {
			state.upcomingEvents = calendarData;
		},
		LOG_OUT(state) {
			state.isLoggedIn = false;
			const Toast = Swal.mixin({
				toast: true,
				position: "top-end",
				showConfirmButton: false,
				timer: 2000,
				timerProgressBar: true,
				didOpen: (toast) => {
					toast.addEventListener("mouseenter", Swal.stopTimer);
					toast.addEventListener("mouseleave", Swal.resumeTimer);
				},
			});
			Toast.fire({
				icon: "success",
				title: "Logged out successfully",
			});
		},
	},
	actions: {
		async getWeatherData({ commit }) {
			try {
				let weatherData = await axios({
					method: "GET",
					url: "/weather",
				});
				commit("GET_WEATHER_DATA", weatherData);
			} catch (err) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: err.response.data,
				});
			}
		},
		async googleLogin({ commit }, tokenData) {
			try {
				let login = await axios({
					method: "POST",
					url: "/login",
					data: {
						id_token: tokenData.id_token,
						access_token: tokenData.access_token,
					},
				});
				let access_token = login.data.access_token;
				commit("LOGIN_GOOGLE", access_token);
				return true;
			} catch (err) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: err.response.data,
				});
			}
		},
		async getCalendar({ dispatch, commit }) {
			try {
				let access_token = localStorage.getItem("access_token");
				let calendarData = await axios({
					method: "GET",
					url: "/calendar",
					headers: {
						access_token,
					},
				});
				commit("GET_CALENDAR", calendarData);
				dispatch("getPushNotification");
			} catch (err) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: err.response.data,
				});
			}
		},
		getPushNotification() {
			firebase
				.messaging()
				.requestPermission()
				.then(() => {
					console.log("Notification permission granted");
					return firebase.messaging().getToken();
				})
				.then((token) => {
					return axios({
						method: "POST",
						url: "/pushNotification",
						data: {
							registrationToken: token,
						},
					});
				})
				.then(() => {
					firebase.messaging().onMessage((payload) => {
						Swal.fire({
							icon: "info",
							title: payload.notification.title,
							text: payload.notification.body,
						});
					});
				})
				.catch((err) => {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: err.response.data,
					});
				});
		},
	},
	modules: {},
});
