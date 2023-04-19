// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC70-VhtOigyozU8HAPgQzdbekgU9KXzqY",
  authDomain: "day123-cf12c.firebaseapp.com",
  projectId: "day123-cf12c",
  storageBucket: "day123-cf12c.appspot.com",
  messagingSenderId: "692046642872",
  appId: "1:692046642872:web:b3fa8378429ba9f76c7e4d",
  measurementId: "G-ZX6B8Z5BY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);