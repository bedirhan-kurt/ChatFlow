// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBELJX-vG4T5Fy94s7PKHeX2zF-YorByWA",
    authDomain: "chatflow-817cf.firebaseapp.com",
    projectId: "chatflow-817cf",
    storageBucket: "chatflow-817cf.firebasestorage.app",
    messagingSenderId: "37761569790",
    appId: "1:37761569790:web:ed8c82513b554b145d66af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };