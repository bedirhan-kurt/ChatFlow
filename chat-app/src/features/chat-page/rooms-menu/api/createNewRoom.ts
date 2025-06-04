import { db } from "@/shared/api/firebaseConfig.ts";
import { arrayUnion, doc, serverTimestamp, setDoc, updateDoc} from "firebase/firestore";
import { customAlphabet } from 'nanoid';
import { formatRoomCode } from "@/features/rooms-page/rooms/lib/utils.ts";
import CreateRoomParams from "@/features/chat-page/rooms-menu/lib/types.ts";

export default async function createNewRoom({
                                                uid,
                                                username,
                                                name,
                                                description,
                                                canEveryoneJoin,
                                                passwordProtection,
                                                password,
                                                limitUsers,
                                                maxMembers,
                                                expiryEnabled,
                                                expiryDate,
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
            passwordProtection,
            limitUsers: limitUsers ?? false,
            expiryEnabled: expiryEnabled ?? false,
            createdAt: serverTimestamp(),
            members: members,
            ...(limitUsers ? { maxMembers } : {}),
            ...(canEveryoneJoin ? {} : { joinRequests: [] }),
            ...(passwordProtection ? { password } : {}),
            ...(expiryEnabled ? { expiryDate } : {}),
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