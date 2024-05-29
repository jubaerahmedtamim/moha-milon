// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGGEEeBt76Ur357Qywn_7pwzjFLFCwDCc",
  authDomain: "auth-firebase-context-ta-3d003.firebaseapp.com",
  projectId: "auth-firebase-context-ta-3d003",
  storageBucket: "auth-firebase-context-ta-3d003.appspot.com",
  messagingSenderId: "828623437613",
  appId: "1:828623437613:web:6d5a9378da795acf465da4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;