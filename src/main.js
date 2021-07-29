import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GAuth from "vue-google-oauth2";
import firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
	apiKey: "AIzaSyBnmM8J6hZULqxmpQUs_R4fJg3K4Wjv15c",
	authDomain: "weather-calendar-321106.firebaseapp.com",
	projectId: "weather-calendar-321106",
	storageBucket: "weather-calendar-321106.appspot.com",
	messagingSenderId: "513204458705",
	appId: "1:513204458705:web:7e75ea7b5cacd1dfcd61f0",
	measurementId: "G-SB3N8LX972",
});

navigator.serviceWorker
	.register("firebase-messaging-sw.js")
	.then((registration) => {
		const messaging = firebase.messaging();
		messaging.useServiceWorker(registration);
	})
	.catch((err) => {
		console.log(err);
	});

Vue.config.productionTip = false;

Vue.prototype.$baseEndpoint = "https://weather-calendar-hacktiv.herokuapp.com";

const gauthOption = {
	clientId:
		"513204458705-5gbvq0uib5o19v8lhh76g84unaud6mtg.apps.googleusercontent.com",
	scope: "profile email https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events",
	prompt: "select_account",
};

Vue.use(GAuth, gauthOption);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
