import { db } from "@/shared/api/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

type Member = {
    uid: string;
    username: string;
    isOnline: boolean;
};

export async function getMembersData(userId: string): Promise<Member | null> {
    try {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const data = userSnap.data();

            return {
                uid: userId,
                username: data.username || "",
                isOnline: data.isOnline || false,
            };
        } else {
            console.log("No such user!");
            return null;
        }
    } catch (error) {
        console.error("Error getting user data:", error);
        return null;
    }
}