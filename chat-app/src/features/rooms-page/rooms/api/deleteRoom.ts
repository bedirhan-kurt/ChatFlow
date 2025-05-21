import { db } from "../../../../shared/api/firebaseConfig.ts";
import { deleteDoc, doc } from "firebase/firestore";

export default async function deleteRoom(id: string) {
    try {
        await deleteDoc(doc(db, "rooms", id));
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
} // Copilot
