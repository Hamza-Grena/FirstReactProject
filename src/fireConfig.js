// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkzbI8KI_hWwtufUmiZCvGzeKJr4o0Gpk",
  authDomain: "authuser-59155.firebaseapp.com",
  projectId: "authuser-59155",
  storageBucket: "authuser-59155.appspot.com",
  messagingSenderId: "456134468680",
  appId: "1:456134468680:web:c092dbe267b6149ff8a47d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;
