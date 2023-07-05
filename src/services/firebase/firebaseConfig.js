import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAjDFwiTVdvOpK20qXEq9reB463g-paJH8",
  authDomain: "finalproyect-afmm.firebaseapp.com",
  projectId: "finalproyect-afmm",
  storageBucket: "finalproyect-afmm.appspot.com",
  messagingSenderId: "494860601731",
  appId: "1:494860601731:web:6e90a0d43f9f8566a94eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)