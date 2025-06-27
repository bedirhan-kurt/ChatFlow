import { db } from "@/shared/api/firebaseConfig.ts";
import { doc, getDoc } from "firebase/firestore";

type Member = {
    uid: string;
    username: string;
    isOnline: boolean;
};

export async function getMembersData(userId: string, currentUser?: { uid: string, username: string } | null): Promise<Member> {
    try {
        // If trying to get current user's data, use the passed currentUser if available
        if (currentUser && currentUser.uid === userId) {
            return {
                uid: userId,
                username: currentUser.username || "Unknown User",
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
