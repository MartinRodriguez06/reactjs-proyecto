// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh5LRxN6610NLAgnudFZ5EHpISPzn68Nw",
  authDomain: "libreriaonline-3493f.firebaseapp.com",
  projectId: "libreriaonline-3493f",
  storageBucket: "libreriaonline-3493f.appspot.com",
  messagingSenderId: "1055150136615",
  appId: "1:1055150136615:web:4c1401e9972d5c0cd89d02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFireBase = ()=> app