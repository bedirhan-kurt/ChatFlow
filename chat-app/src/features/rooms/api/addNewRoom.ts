import { db } from "../../../shared/api/firebaseConfig.ts";
import { collection, addDoc } from "firebase/firestore";
import { customAlphabet } from 'nanoid';
import {formatRoomCode} from "@/features/rooms/lib/utils.ts";

interface AddNewRoomParams {
    user: { uid: string } | undefined;
    username: string;
}

export default async function addNewRoom({ user, username }: AddNewRoomParams) {
    console.log("user", user);
    const numericId = customAlphabet('0123456789', 9);
    const roomCode = numericId();

    const creatorId = user?.uid;
    const creatorUsername = username;

    const participants = [creatorId];

    try {
        await addDoc(collection(db, "rooms"), {
            roomCode,
            creatorId,
            creatorUsername: creatorUsername,
            participants,
            createdAt: new Date().toISOString(),
        });
        return formatRoomCode(roomCode); // Return the document ID
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
}