// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6aPguELD0I5SZ4TLWgWaIgWzXhbxzeIs",
  authDomain: "chat-app-88580.firebaseapp.com",
  projectId: "chat-app-88580",
  storageBucket: "chat-app-88580.appspot.com",
  messagingSenderId: "1007113551416",
  appId: "1:1007113551416:web:ddfbf6c5c06e37aa4770cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)