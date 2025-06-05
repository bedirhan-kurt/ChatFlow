// Import the necessary Firebase functions
import { db } from "@/shared/api/firebaseConfig.ts";
import { doc, updateDoc } from "firebase/firestore";

// Function to update the username in Firestore
export default async function updateUsername(userId: string, newUsername: string) {
    try {
        const userRef = doc(db, "profile", userId);
        await updateDoc(userRef, {
            username: newUsername,
        });
        console.log("Username updated successfully");
    } catch (error) {
        console.error("Error updating username:", error);
    }
}