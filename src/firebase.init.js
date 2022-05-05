// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc9FiGYPHESwfFrwzUbJJu3qcBHef9S4k",
  authDomain: "hitup-48915.firebaseapp.com",
  projectId: "hitup-48915",
  storageBucket: "hitup-48915.appspot.com",
  messagingSenderId: "159328534736",
  appId: "1:159328534736:web:10e237e8e3e8d9d1609ed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;