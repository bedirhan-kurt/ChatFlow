import {collection, getDocs} from "firebase/firestore";
import {db} from "@/shared/api/firebaseConfig.ts";

export default async function checkRoomExistence(roomCode: string) {
    const roomRef = collection(db, "rooms", roomCode);
    const querySnapshot = await getDocs(roomRef);

    if (!querySnapshot.empty) {
        console.log("Doküman var.");
        return true;
    } else {
        console.log("Doküman yok.");
        return false;
    }
}