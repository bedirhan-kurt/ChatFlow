import {doc, getDoc} from "firebase/firestore";
import {db} from "@/shared/api/firebaseConfig.ts";

export async function fetchJoinedRooms(userId: string) {
    if (!userId) throw new Error("User ID is required");

    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().joinedRooms;
    } else {
        return null;
    }
}