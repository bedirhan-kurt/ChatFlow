import { db } from "./firebaseConfig.ts";
import { collection, addDoc } from "firebase/firestore";

export default async function addNewMessage(messageContent: string, uid: string, authorUsername: string) {
    try {
        await addDoc(collection(db, "messages"), {
            messageContent,
            uid,
            authorUsername,
            createdAt: new Date().toISOString(),
        });
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}