import { auth } from "@/shared/api/firebaseConfig.ts";
import { db } from "@/shared/api/firebaseConfig.ts";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { generateFromEmail } from "unique-username-generator";
import { FirebaseError } from "firebase/app";

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        const userRef = doc(db, "profile", user.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            await setDoc(userRef, {
                createdAt: serverTimestamp(),
                email: user.email || "",
                isOnline: true,
                joinedRooms: [""],
                userId: user.uid,
                username: generateFromEmail(user.email || "", 4) || "",
            });
        } else {
            // Update the user's online status if they already exist
            await setDoc(userRef, {
                ...userSnap.data(),
                isOnline: true,
            }, { merge: true });
        }

        return user;
    } catch (error) {
        if (error instanceof FirebaseError) {
            if (error.code === 'appCheck/invalid-token') {
                alert("App Check verification failed. Please try again.");
            } else if (error.code === 'auth/requires-recent-login') {
                alert("Please log in again.");
            } else if (error.code === 'auth/operation-not-allowed') {
                alert("Google sign-in is not currently allowed.");
            } else if (error.code === 'auth/popup-closed-by-user') {
                alert("The sign-in popup was closed. Please try again.");
            } else {
                alert("An error occurred. Please try again later.");
            }
        } else {
            console.error("An unexpected error occurred:", error);
        }
        console.error("Google login failed:", error);
    }
}