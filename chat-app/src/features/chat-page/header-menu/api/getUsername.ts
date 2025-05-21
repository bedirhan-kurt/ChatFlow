import { db } from "@/shared/api/firebaseConfig.ts";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "@/shared/api/firebaseConfig.ts";

export async function getUsername(userId: string) {
    try {
        // If trying to get current user's username, use auth.currentUser.displayName if available
        if (auth.currentUser && auth.currentUser.uid === userId && auth.currentUser.displayName) {
            return auth.currentUser.displayName;
        }

        const userRef = doc(db, "profile", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            return userSnap.data().username;
        } else {
            console.log("No such user!");
            return "Unknown User"; // Return a default value instead of null
        }
    } catch (error) {
        console.error("Error getting user data:", error);
        return "Unknown User"; // Return a default value instead of null
    }
}
