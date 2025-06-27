import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/shared/api/firebaseConfig.ts";
import checkRoomExistence
    from "@/features/chat [page]/rooms-menu [section]/join-room [feat]/api/checkRoomExistence.ts";
import {formatRoomCode} from "@/features/rooms [page]/rooms/lib/utils.ts";

export default async function joinRoom(roomCode: string, userId: string, setError: (error: string | null) => void) {
    const formattedRoomCode = formatRoomCode(roomCode);

    const roomRef = doc(db, "rooms", formattedRoomCode);
    const userRef = doc(db, "users", userId);

    try {
        const exists = await checkRoomExistence(formattedRoomCode);
        if (exists) {
            await updateDoc(roomRef, {
                members: arrayUnion(userId),
            });
            await updateDoc(userRef, {
                joinedRooms: arrayUnion(formattedRoomCode),
            });
        } else {
            setError("Room does not exist");
            console.log("Room doesn't exist");
        }
    } catch (error) {
        console.error("Error checking room existence:", error);
        throw new Error("Error checking room existence");
    }
}