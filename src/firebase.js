
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBHXUuYhhoeSG4jcyOe7wFOWCC0EwhGF80",
  authDomain: "react-chat-99808.firebaseapp.com",
  projectId: "react-chat-99808",
  storageBucket: "react-chat-99808.appspot.com",
  messagingSenderId: "7054015893",
  appId: "1:7054015893:web:abf738e14d9b77ab108a9c",
  measurementId: "G-KJ2Q8CW2SQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
