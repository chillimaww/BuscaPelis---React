// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb67npDEctF4Z_8Pgui77Fn5tx8MJ2YP8",
  authDomain: "buscapelis-da434.firebaseapp.com",
  projectId: "buscapelis-da434",
  storageBucket: "buscapelis-da434.appspot.com",
  messagingSenderId: "933967705543",
  appId: "1:933967705543:web:cf6343205dd63d86b1d5e2",
  measurementId: "G-WPF5DBD24H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
