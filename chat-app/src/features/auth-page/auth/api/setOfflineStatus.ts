import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/shared/api/firebaseConfig.ts";

export default async function setOfflineStatus(uid: string) {
    const userRef = doc(db, "profile", uid);

    try {
        await updateDoc(userRef, { isOnline: false });
        console.log("User status set to offline.");
    } catch (error) {
        console.error("Error setting user status:", error);
    }
}