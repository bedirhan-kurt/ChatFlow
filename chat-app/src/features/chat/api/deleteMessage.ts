import { db } from "../../../shared/api/firebaseConfig.ts";
import { deleteDoc, doc } from "firebase/firestore";

export default async function deleteMessage(id: string) {
    try {
        await deleteDoc(doc(db, "messages", id));
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
} // Copilot
