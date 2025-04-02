import { db } from "./firebaseConfig.ts";
import { collection, addDoc } from "firebase/firestore";

export default async function addNewMessage(messageContent: string, uid: string, authorUsername: string, responseTo: string) {
    try {
        await addDoc(collection(db, "messages"), {
            messageContent,
            uid,
            authorUsername,
            responseTo,
            createdAt: new Date().toISOString(),
        });
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}