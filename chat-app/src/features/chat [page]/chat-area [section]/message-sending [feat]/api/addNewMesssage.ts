import { db } from "@/shared/api/firebaseConfig.ts";
import { collection, addDoc, FieldValue } from "firebase/firestore";

export interface AddNewMessageParams {
    roomCode: string;
    authorId: string;
    authorUsername: string;
    content: string;
    createdAt: FieldValue;
    responseTo?: string;
    reactions?: { [key: string]: number };
}

export default async function addNewMessage(messageData: AddNewMessageParams) {
    try {
        const { roomCode, ...messagePayload } = messageData;
        await addDoc(collection(db, "rooms", roomCode, "messages"), {
            ...messagePayload,
        });
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}