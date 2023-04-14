// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSutE160flae7It6LsNAvs2cyI91ImZsI",
  authDomain: "reactjs-tutorial-47c30.firebaseapp.com",
  projectId: "reactjs-tutorial-47c30",
  storageBucket: "reactjs-tutorial-47c30.appspot.com",
  messagingSenderId: "1082037675168",
  appId: "1:1082037675168:web:ed25681ea2fd59a64115c5",
  measurementId: "G-BSVRERDHX4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireStore = getFirestore(app);
