import { db } from "../../../shared/api/firebaseConfig.ts";
import { deleteDoc, doc } from "firebase/firestore";

export default async function deleteMessage(roomCode: string, messageId: string) {
    if (!roomCode) {
        console.error("Room code is not available.");
        return;
    }

    try {
        await deleteDoc(doc(db, "rooms", roomCode, "messages", messageId));
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
} // Copilot
