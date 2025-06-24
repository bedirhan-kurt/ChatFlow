import {db} from "@/shared/api/firebaseConfig.ts";
import {doc, updateDoc, arrayRemove} from "firebase/firestore";

export default function leaveRoom(roomCode: string, uid: string) {
    const roomRef = doc(db, "rooms", roomCode);
    const userRef = doc(db, "users", uid);

    updateDoc(roomRef, {
        members: arrayRemove(uid)
    })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });

    updateDoc(userRef, {
        joinedRooms: arrayRemove(roomCode)
    })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
}