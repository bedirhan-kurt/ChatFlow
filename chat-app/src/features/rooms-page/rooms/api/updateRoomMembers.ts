import { doc, setDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from "@/shared/api/firebaseConfig.ts";

export default async function updateRoomMembers(roomCode: string) {
    const user = auth.currentUser;

    if (!user) {
        throw new Error("No user is currently logged in.");
    }

    const roomRef = doc(db, "rooms", roomCode);

    await setDoc(roomRef, {
        members: arrayUnion(user.uid),
    }, { merge: true });
}
