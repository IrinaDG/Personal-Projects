// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2qtRpaeK1qqVVXTZrLh1ZfsEj1fz1hl0",
  authDomain: "house-marketplace-app-837b6.firebaseapp.com",
  projectId: "house-marketplace-app-837b6",
  storageBucket: "house-marketplace-app-837b6.appspot.com",
  messagingSenderId: "528060608985",
  appId: "1:528060608985:web:f9bc5af8ea83a210bee9c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()