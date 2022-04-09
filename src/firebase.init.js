// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQli5SfgT0S-HSCxFYvHJrSJ-u7Mg3MF4",
  authDomain: "ema-john-simple-8c8a8.firebaseapp.com",
  projectId: "ema-john-simple-8c8a8",
  storageBucket: "ema-john-simple-8c8a8.appspot.com",
  messagingSenderId: "448701953367",
  appId: "1:448701953367:web:94f03624eceb89f1677a12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;