import { db } from "@/shared/api/firebaseConfig.ts";
import { arrayUnion, doc, serverTimestamp, setDoc, updateDoc} from "firebase/firestore";
import { customAlphabet } from 'nanoid';
import CreateRoomParams from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/lib/types.ts";
import {formatRoomCode} from "@/features/rooms [page]/rooms/lib/utils.ts";

export default async function createNewRoom({
                                                uid,
                                                username,
                                                name,
                                                description,
                                                canEveryoneJoin,
                                                limitUsers,
                                                maxMembers,
                                            }: CreateRoomParams) {
    const numericId = customAlphabet('0123456789', 9);
    const roomCode = formatRoomCode(numericId());

    const creatorId = uid;
    const creatorUsername = username;
    const members = [creatorId];

    try {
        await setDoc(doc(db, 'rooms', roomCode), {


            creatorId,
            creatorUsername,
            name,
            description,
            canEveryoneJoin: canEveryoneJoin ?? false,
            limitUsers: limitUsers ?? false,
            createdAt: serverTimestamp(),
            members: members,
            ...(limitUsers ? { maxMembers } : {}),
            ...(canEveryoneJoin ? {} : { joinRequests: [] }),
        });

        if (creatorId) {
            await updateDoc(doc(db, "users", creatorId), {
                joinedRooms: arrayUnion(roomCode),
            });
        } else {
            console.error("creatorId is undefined!");
        }
        return roomCode;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
}