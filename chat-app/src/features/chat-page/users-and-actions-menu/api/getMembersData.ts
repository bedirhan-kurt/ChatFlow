import { db } from "@/shared/api/firebaseConfig.ts";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "@/shared/api/firebaseConfig.ts";

type Member = {
    uid: string;
    username: string;
    isOnline: boolean;
};

export async function getMembersData(userId: string): Promise<Member | null> {
    try {
        // If trying to get current user's data, use auth.currentUser if available
        if (auth.currentUser && auth.currentUser.uid === userId) {
            return {
                uid: userId,
                username: auth.currentUser.displayName || "Unknown User",
                isOnline: true, // Current user is online
            };
        }

        const userRef = doc(db, "profile", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const data = userSnap.data();

            return {
                uid: userId,
                username: data.username || "Unknown User",
                isOnline: data.isOnline || false,
            };
        } else {
            console.log("No such user!");
            // Return a default member object instead of null
            return {
                uid: userId,
                username: "Unknown User",
                isOnline: false,
            };
        }
    } catch (error) {
        console.error("Error getting user data:", error);
        // Return a default member object instead of null
        return {
            uid: userId,
            username: "Unknown User",
            isOnline: false,
        };
    }
}
