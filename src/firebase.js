// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKJ3mAx_CGhbDrRkaPxQeEBlxN1H-L9ho",
  authDomain: "flight-project-b0e53.firebaseapp.com",
  projectId: "flight-project-b0e53",
  storageBucket: "flight-project-b0e53.appspot.com",
  messagingSenderId: "241178756288",
  appId: "1:241178756288:web:19ae1e1205047ff3165925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)