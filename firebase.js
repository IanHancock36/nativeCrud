// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBZaFmTGVZv5mFpZDsvt9agb_kT9XhfTA",
  authDomain: "nativecrud-ac93c.firebaseapp.com",
  projectId: "nativecrud-ac93c",
  storageBucket: "nativecrud-ac93c.appspot.com",
  messagingSenderId: "505158453163",
  appId: "1:505158453163:web:03097fe9c54bbbaead74ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);    

//initizile database
export const db = getDatabase(app);