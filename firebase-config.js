// Firebase console > Project settings > Your apps > Web app se yeh values copy karke yahan paste karein.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDce4TZNcqLQV8i7eGYWZOXkHfoj3OHbhI",
  authDomain: "bf-brother.firebaseapp.com",
  projectId: "bf-brother",
  storageBucket: "bf-brother.firebasestorage.app",
  messagingSenderId: "33699309599",
  appId: "1:33699309599:web:d5b79ce0fb15730e1b4d2a",
  measurementId: "G-LE5YTQEP6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
