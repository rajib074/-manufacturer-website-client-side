// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 /*  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId, */
  apiKey: "AIzaSyA5Xu2fpNUPvV5yXP5ZDaliQVciJ9McBXE",
  authDomain: "vitacreact.firebaseapp.com",
  projectId: "vitacreact",
  storageBucket: "vitacreact.appspot.com",
  messagingSenderId: "218486217292",
  appId: "1:218486217292:web:16e0a9b4d81dae0906b2e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;