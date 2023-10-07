/* eslint-disable no-undef */
// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
	apiKey: "AIzaSyDlJmSFM4XJEYIkZPtfkqxNAIpTomjxLyc",
	authDomain: "weerengineer.firebaseapp.com",
	storageBucket: "weerengineer.appspot.com",
	messagingSenderId: "40911931240",
	projectId: "weerengineer",
	appId: "1:400987767196:web:83873c54eabf644f4d8859"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]

messaging.onBackgroundMessage(function (payload) {
	// Customize notification here
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: "/android-chrome-192x192.png",
		link: payload.link,
		vibrate: [200, 100, 200, 100, 200, 100, 200],
		tag: "vibration-sample"
	};
	return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("push", (event) => {
	let data = JSON.parse(event.data.text());
	console.log(event.data.text());
	const notificationOptions = {
		body: data.notification.body,
		icon: "/android-chrome-192x192.png",
		link: payload.link,
		vibrate: [200, 100, 200, 100, 200, 100, 200],
		tag: "vibration-sample"
	};
	event.waitUntil(
		self.registration
			.showNotification(data.notification.title, notificationOptions)
			.then(() => {
				console.log("done");
			})
			.catch((err) => {
				console.log(err);
			})
	);
});

self.addEventListener("message", (event) => {
	if (event.data && event.data.type === "SKIP_WAITING") {
		self.skipWaiting();
	}
});
