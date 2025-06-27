import { doc, getDoc } from "firebase/firestore";
import { db } from "@/shared/api/firebaseConfig.ts";

export default async function checkRoomExistence(roomCode: string) {
    const roomRef = doc(db, "rooms", roomCode);
    const docSnap = await getDoc(roomRef);

    return !!docSnap.exists();
}