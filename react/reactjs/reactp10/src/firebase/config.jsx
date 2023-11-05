// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8g-zirg2dt0ggq8xXk1iNrcFDVZ-8_as",
  authDomain: "miniblog-eee9d.firebaseapp.com",
  projectId: "miniblog-eee9d",
  storageBucket: "miniblog-eee9d.appspot.com",
  messagingSenderId: "884197651852",
  appId: "1:884197651852:web:17c66a31336274906112a9",
  measurementId: "G-TY4BTX2P3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
