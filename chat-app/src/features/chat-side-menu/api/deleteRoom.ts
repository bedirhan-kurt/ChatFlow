import {db} from "@/shared/api/firebaseConfig";
import {deleteDoc, doc,} from "firebase/firestore";

export default function deleteRoom(roomCode: string) {
    const roomRef = doc(db, "rooms", roomCode);

    deleteDoc(roomRef)
        .then(() => {
            console.log("Document successfully deleted!");
        })
        .catch((error) => {
            console.log("Error deleting document:", error);
        });
}