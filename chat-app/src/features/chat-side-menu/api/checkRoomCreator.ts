import { db } from "@/shared/api/firebaseConfig";
import {doc, getDoc} from "firebase/firestore";

export default async function checkRoomCreator(roomCode: string, uid: string) {
    const roomRef = doc(db, "rooms", roomCode);

    return await getDoc(roomRef)
        .then((roomSnap) => {
            if (roomSnap.exists()) {
                const roomData = roomSnap.data();
                const creatorId = roomData.creatorId;
                return creatorId === uid;
            } else {
                console.log("No such room!");
                return false;
            }
        })
        .catch((error) => {
            console.error("Error getting room data:", error);
            return false;
        });
}