// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase'

// import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWwJKPpvvF_qAhiluDGRQgpQdyU_NeIXQ",
  authDomain: "disneyplus-clone-ce147.firebaseapp.com",
  projectId: "disneyplus-clone-ce147",
  storageBucket: "disneyplus-clone-ce147.appspot.com",
  messagingSenderId: "533687132708",
  appId: "1:533687132708:web:d709c70e8bcf7886dc2eb1",
  measurementId: "G-44HS7PGBSP"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

