// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBucQjY8CubIbyfzQEYcKWdkc-fLbsPML8",
  authDomain: "vocabbee-63c67.firebaseapp.com",
  projectId: "vocabbee-63c67",
  storageBucket: "vocabbee-63c67.firebasestorage.app",
  messagingSenderId: "215186251803",
  appId: "1:215186251803:web:f3bba69842ef95547cd8be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;