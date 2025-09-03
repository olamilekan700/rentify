// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage, getStrorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "rentify-b1a81.firebaseapp.com",
  projectId: "rentify-b1a81",
  storageBucket: "rentify-b1a81.firebasestorage.app",
  messagingSenderId: "720824128827",
  appId: "1:720824128827:web:e52076438b5280f706d31e"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export{db,storage}