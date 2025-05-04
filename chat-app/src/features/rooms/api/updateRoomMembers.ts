import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from "@/shared/api/firebaseConfig.ts";

export default async function updateRoomsMemers(roomCode: string) {
    const user = auth.currentUser;

    if (!user) {
        throw new Error("No user is currently logged in.");
    }

    const userRef = doc(db, "rooms", roomCode);

    await updateDoc(userRef, {
        members: arrayUnion(user.uid),
    });
}