import { db } from "@/shared/api/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import type { Room } from "../hooks/useJoinedRooms.ts";

export async function fetchJoinedRoomsData(roomCodes: string[]): Promise<Room[]> {
    const result: Room[] = [];

    for (const roomCode of roomCodes) {
        if (!roomCode || typeof roomCode !== "string") {
            continue;
        }
        const docRef = doc(db, "rooms", roomCode);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
            result.push({ ...(snap.data() as Room), roomCode: roomCode });
        }
    }

    return result;
}
