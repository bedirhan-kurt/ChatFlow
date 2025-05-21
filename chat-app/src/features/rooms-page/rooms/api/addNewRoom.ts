import { db } from "../../../../shared/api/firebaseConfig.ts";
import { doc, setDoc } from "firebase/firestore";
import { customAlphabet } from 'nanoid';
import { formatRoomCode } from "@/features/rooms-page/rooms/lib/utils.ts";

interface AddNewRoomParams {
    user: { uid: string } | undefined;
    username: string;
}

export default async function addNewRoom({ user, username }: AddNewRoomParams) {
    const numericId = customAlphabet('0123456789', 9);
    const roomCode = formatRoomCode(numericId());

    const creatorId = user?.uid;
    const creatorUsername = username;
    const members = [creatorId];

    try {
        const roomRef = doc(db, "rooms", roomCode);
        await setDoc(roomRef, {
            roomCode,
            creatorId,
            creatorUsername,
            members,
            createdAt: new Date().toISOString(),
        });
        return roomCode;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
}