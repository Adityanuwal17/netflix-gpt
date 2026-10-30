// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDKKp9j9J8nvxkamSgI3mBPb07mpJaYGs",
  authDomain: "netflixgpt-1c5fb.firebaseapp.com",
  projectId: "netflixgpt-1c5fb",
  storageBucket: "netflixgpt-1c5fb.firebasestorage.app",
  messagingSenderId: "422426913183",
  appId: "1:422426913183:web:a36ae3e7de16ce72cb75aa",
  measurementId: "G-LWDBEWN85Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
