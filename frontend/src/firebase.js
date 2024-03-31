// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-ssc.firebaseapp.com",
  projectId: "mern-ssc",
  storageBucket: "mern-ssc.appspot.com",
  messagingSenderId: "1081066968236",
  appId: "1:1081066968236:web:9fe3313b7350fc4739fb09",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
