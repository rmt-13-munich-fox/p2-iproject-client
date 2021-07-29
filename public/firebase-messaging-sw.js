importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js");

firebase.initializeApp({
	apiKey: "AIzaSyBnmM8J6hZULqxmpQUs_R4fJg3K4Wjv15c",
	authDomain: "weather-calendar-321106.firebaseapp.com",
	projectId: "weather-calendar-321106",
	storageBucket: "weather-calendar-321106.appspot.com",
	messagingSenderId: "513204458705",
	appId: "1:513204458705:web:7e75ea7b5cacd1dfcd61f0",
	measurementId: "G-SB3N8LX972",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
	console.log(
		"[firebase-messaging-sw.js] Received background message ",
		payload
	);
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: "/firebase-logo.png",
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
