// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj_Xs3SxHDa0QkYgGbM9PghL_HOTFHCLE",
  authDomain: "mern-estate-6d5ae.firebaseapp.com",
  projectId: "mern-estate-6d5ae",
  storageBucket: "mern-estate-6d5ae.appspot.com",
  messagingSenderId: "746438931318",
  appId: "1:746438931318:web:5f4d13d66c580dedc0c057"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);