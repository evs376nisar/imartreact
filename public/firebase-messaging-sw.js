importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyD7JLeVv1h2siFuqCccCnnNIDI7nFY8_AA",
  authDomain: "imart-users.firebaseapp.com",
  projectId: "imart-users",
  storageBucket: "imart-users.firebasestorage.app",
  messagingSenderId: "691940776296",
  appId: "1:691940776296:web:cd8ac0510b6db118b59edd",
  measurementId: "G-FJ24TD0YX7"
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
