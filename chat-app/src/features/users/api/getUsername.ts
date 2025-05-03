import { db } from "@/shared/api/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export async function getUsername(userId: string) {
    try {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            console.log("userName:", userSnap.data().userName);
            return userSnap.data().userName;
        } else {
            console.log("No such user!");
            return null;
        }
    } catch (error) {
        console.error("Error getting user data:", error);
        return null;
    }
}