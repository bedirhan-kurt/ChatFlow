import { db } from "./firebaseConfig.ts";
import { collection, addDoc } from "firebase/firestore";

export default async function addNewMessage(messageContent: string, author: string) {
    try {
        await addDoc(collection(db, "messages"), {
            messageContent,
            author,
            createdAt: new Date().toISOString(),
        });
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}