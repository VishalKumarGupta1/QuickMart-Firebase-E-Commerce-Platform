// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmLrdmeyCAWIoeXnlrD5AWh6dpiWCtbqE",
  authDomain: "e-commerce-aba63.firebaseapp.com",
  projectId: "e-commerce-aba63",
  storageBucket: "e-commerce-aba63.firebasestorage.app",
  messagingSenderId: "447169361153",
  appId: "1:447169361153:web:cbe6205dabfee33ed6d700",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
