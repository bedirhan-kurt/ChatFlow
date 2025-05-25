import { db } from "@/shared/api/firebaseConfig.ts";
import { doc, getDoc } from "firebase/firestore";

export async function getUsername(userId: string): Promise<string> {
    try {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const data = userSnap.data();
            return data.username || "Unknown User";
        } else {
            console.log("No such user!");
            return "Unknown User";
        }
    } catch (error) {
        console.error("Error getting user data:", error);
        return "Unknown User";
    }
}
