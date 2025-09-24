/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEfIX8WN2yGtRaFQKux3NORKOHAiy5CWo",
  authDomain: "couples-retreat-f48b0.firebaseapp.com",
  projectId: "couples-retreat-f48b0",
  storageBucket: "couples-retreat-f48b0.firebasestorage.app",
  messagingSenderId: "886830200949",
  appId: "1:886830200949:web:b6f3553412bc49f723e03c",
  measurementId: "G-SKBR4J5XWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
