import { db } from "@/shared/api/firebaseConfig.ts";
import { doc, getDoc } from "firebase/firestore";
import type { Room } from "../hooks/useJoinedRooms.ts";
import { toReadableDate } from "@/shared/lib/utils/toReadableDate.ts";

export async function fetchJoinedRoomsData(roomCodes: string[]): Promise<Room[]> {
    const result: Room[] = [];

    for (const roomCode of roomCodes) {
        if (!roomCode || typeof roomCode !== "string") {
            continue;
        }
        const docRef = doc(db, "rooms", roomCode);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
            const data = snap.data();
            result.push({
                roomCode: roomCode,
                createdAt: toReadableDate(data.createdAt),
                name: data.name || "",
                creatorId: data.creatorId || "",
                creatorUsername: data.creatorUsername || "",
                members: data.members || []
            } as Room);
        }
    }

    return result;
}
