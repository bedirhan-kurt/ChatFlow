// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Extend the Window interface
declare global {
    interface Window {
        FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean;
    }
}

// DEBUG_TOKEN: 0247e716-0e60-4d82-9c04-d0d7d1bb810c

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

// Set the debug token for App Check
//window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

// Initialize App Check
{/*
    const appCheck = initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider('6Ld1JDgrAAAAAC0KgM5jNsgVedPKrroZrHNYHMhL'),
        isTokenAutoRefreshEnabled: true
    });
*/}

export { auth, db };