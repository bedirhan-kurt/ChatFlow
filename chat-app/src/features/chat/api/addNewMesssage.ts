import { db } from "../../../shared/api/firebaseConfig.ts";
import { collection, addDoc } from "firebase/firestore";

interface AddNewMessageParams {
    messageContent: string;
    user: { uid: string };
    username: string;
    responseTo?: string;
}

export default async function addNewMessage({ messageContent, user, username, responseTo = "" }: AddNewMessageParams) {
    const uid = user?.uid;
    console.log("uid", uid);
    const authorUsername = username;

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