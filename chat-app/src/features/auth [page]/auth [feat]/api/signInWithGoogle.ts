import { auth, db } from "@/shared/api/firebaseConfig.ts";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { generateFromEmail } from "unique-username-generator";
import { FirebaseError } from "firebase/app";

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
    try {
        const { user } = await signInWithPopup(auth, provider);
        const userRef = doc(db, "users", user.uid);

        if (!(await getDoc(userRef)).exists()) {
            await setDoc(userRef, {
                createdAt: serverTimestamp(),
                email: user.email || "",
                isOnline: true,
                joinedRooms: [""],
                userId: user.uid,
                username: generateFromEmail(user.email || "", 4),
            });
        } else {
            await setDoc(userRef, { isOnline: true }, { merge: true });
        }

        return user;
    } catch (error) {
        if (error instanceof FirebaseError) {
            const errorMessages: Record<string, string> = {
                "appCheck/invalid-token": "App Check verification failed. Please try again.",
                "auth/requires-recent-login": "Please log in again.",
                "auth/operation-not-allowed": "Google sign-in is not currently allowed.",
                "auth/popup-closed-by-user": "The sign-in popup was closed. Please try again.",
            };
            alert(errorMessages[error.code] || "An error occurred. Please try again later.");
        } else {
            console.error("An unexpected error occurred:", error);
        }
        console.error("Google login failed:", error);
    }
}