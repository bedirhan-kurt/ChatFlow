import { db } from "@/shared/api/firebaseConfig.ts";
import { arrayUnion, doc, serverTimestamp, setDoc, updateDoc} from "firebase/firestore";
import { customAlphabet } from 'nanoid';
import { formatRoomCode } from "@/features/rooms-page/rooms/lib/utils.ts";

interface AddNewRoomParams {
    uid: string;
    username: string;
    roomName: string;
    canEveryoneJoin?: boolean;
}

export default async function createNewRoom({ uid, username, roomName, canEveryoneJoin }: AddNewRoomParams) {
    const numericId = customAlphabet('0123456789', 9);
    const roomCode = formatRoomCode(numericId());

    const creatorId = uid;
    const creatorUsername = username;
    const members = [creatorId];

    try {
        await setDoc(doc(db, 'rooms', roomCode), {
            roomName: roomName,
            canEveryoneJoin: canEveryoneJoin ?? false,
            creatorId,
            creatorUsername,
            createdAt: serverTimestamp(),
            members: members,
            ...(canEveryoneJoin ? {} : { joinRequests: [] }),
        });

        await updateDoc(doc(db, "users", creatorId), {
            joinedRooms: arrayUnion(roomCode),
        })
        return roomCode;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
}