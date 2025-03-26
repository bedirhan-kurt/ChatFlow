import { db } from "../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default async function addNewMessage(messageContent: string, author: string) {
    await addDoc(collection(db, "messages"), {
        messageContent,
        author,
        createdAt: new Date().toISOString(),
    });
}