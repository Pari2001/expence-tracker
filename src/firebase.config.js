// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2t92_bluph9W3tUVWEC15TE30wPb6bzI",
  authDomain: "spending-analyser.firebaseapp.com",
  projectId: "spending-analyser",
  storageBucket: "spending-analyser.appspot.com",
  messagingSenderId: "714517127370",
  appId: "1:714517127370:web:08688a557a0296e3b09433"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };