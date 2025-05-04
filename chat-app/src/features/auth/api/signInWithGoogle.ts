import {auth} from "@/shared/api/firebaseConfig.ts";
import {db} from "@/shared/api/firebaseConfig.ts";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {doc, getDoc, setDoc, serverTimestamp} from "firebase/firestore";
import {generateFromEmail} from "unique-username-generator";

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        const userRef = doc(db, "users", user.uid);
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
            }, {merge: true});
        }

        return user;
    } catch (error) {
        console.error("Google login failed:", error);
    }
}