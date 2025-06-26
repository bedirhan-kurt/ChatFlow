// Import the necessary Firebase functions
import { db } from "@/shared/api/firebaseConfig.ts";
import { doc, updateDoc } from "firebase/firestore";

// Function to update the username in Firestore
export default async function updateUsername(userId: string, newUsername: string) {
    try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, {
            username: newUsername,
        });
    } catch (error) {
        console.error("Error updating username:", error);
    }
}