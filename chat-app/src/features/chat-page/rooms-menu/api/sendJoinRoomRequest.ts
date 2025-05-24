import checkRoomExistence from "@/features/chat-page/rooms-menu/api/checkRoomExistence.ts";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/shared/api/firebaseConfig.ts";

export default async function sendJoinRoomRequest(roomCode: string, userId: string) {
    const roomRef = doc(db, "rooms", roomCode);

    try {
        const exists = await checkRoomExistence(roomCode);
        if (!exists) {
            await updateDoc(roomRef, {
                joinRequests: arrayUnion(userId),
            });
        }
    } catch (error) {
        console.error("Error checking room existence:", error);
        throw new Error("Error checking room existence");
    }
}