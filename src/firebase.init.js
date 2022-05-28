import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYPsJQoGuFZj2wZdWuOJNPjqT_dB4eEBM",
  authDomain: "auto-parts-b7709.firebaseapp.com",
  projectId: "auto-parts-b7709",
  storageBucket: "auto-parts-b7709.appspot.com",
  messagingSenderId: "788051765580",
  appId: "1:788051765580:web:6129546811131cfb9ec7e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;