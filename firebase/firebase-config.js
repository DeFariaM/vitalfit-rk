// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBvdFcoLJbSd3CmVthA9TsKWmvKAKUKaQ",
  authDomain: "vitalfit-rk.firebaseapp.com",
  projectId: "vitalfit-rk",
  storageBucket: "vitalfit-rk.firebasestorage.app",
  messagingSenderId: "150849874006",
  appId: "1:150849874006:web:7d965d1160a5dd782473f7",
  measurementId: "G-53JBQ32BQC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics =
  typeof window !== "undefined" && isSupported() ? getAnalytics() : null;
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
