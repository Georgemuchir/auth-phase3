// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const VITE_FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: "phase-3-220d8.firebaseapp.com",
  projectId: "phase-3-220d8",
  storageBucket: "phase-3-220d8.appspot.com",
  messagingSenderId: "732863341319",
  appId: "1:732863341319:web:892151e9531e4825999ba2",
  measurementId: "G-48T4B9N33M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Export Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);