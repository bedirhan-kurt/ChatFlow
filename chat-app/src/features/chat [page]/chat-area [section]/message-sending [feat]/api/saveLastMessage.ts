import {setDoc, doc, serverTimestamp} from "firebase/firestore";
import {db} from "@/shared/api/firebaseConfig.ts";

interface LastMessageParams {
    authorId: string;
    content: string;
}

export default async function saveLastMessage(
    roomCode: string, lastMessageData: LastMessageParams
) {

    if (!roomCode) {
        console.error('roomCode is required');
        return;
    }

    try {
        await setDoc(doc(db, "rooms", roomCode, "lastMessages", lastMessageData.authorId), {
            content: lastMessageData.content,
            createdAt: serverTimestamp()
        });
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}