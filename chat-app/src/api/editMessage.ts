import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig.ts";

export async function updateMessage(messageId: string, newContent: string) {
    try {
        const messageRef = doc(db, "messages", messageId);

        await updateDoc(messageRef, {
            messageContent: newContent,
            updatedAt: new Date(),
        });
    } catch (error) {
        console.error("Error updating message:", error);
        throw error;
    }
}
