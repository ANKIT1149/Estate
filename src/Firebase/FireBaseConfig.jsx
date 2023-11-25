// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPkMwL6kfJNNCF-H1sc3s4reQUMjexcMo",
  authDomain: "estate-3761e.firebaseapp.com",
  projectId: "estate-3761e",
  storageBucket: "estate-3761e.appspot.com",
  messagingSenderId: "428370206832",
  appId: "1:428370206832:web:dccd96b2ac9f91bc1b54b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);

export {fireDb, auth}