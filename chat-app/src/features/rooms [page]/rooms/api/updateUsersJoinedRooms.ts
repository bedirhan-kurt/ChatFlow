import { doc, setDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from "@/shared/api/firebaseConfig.ts";

export default async function updateUsersJoinedRooms(roomCode: string) {
    const user = auth.currentUser;

    if (!user) {
        throw new Error("No user is currently logged in.");
    }

    const userRef = doc(db, "profile", user.uid);

    await setDoc(userRef, {
        joinedRooms: arrayUnion(roomCode),
    }, { merge: true });
}
