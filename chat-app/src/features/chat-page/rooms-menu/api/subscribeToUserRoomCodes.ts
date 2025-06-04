import { db } from "@/shared/api/firebaseConfig";
import { doc, onSnapshot, Unsubscribe } from "firebase/firestore";

export function subscribeToUserRoomCodes(
    userId: string,
    onChange: (roomIds: string[]) => void,
    onError: (error: Error) => void
): Unsubscribe {
    console.log("Subscribing to user rooms:", userId);
    const userDocRef = doc(db, "users", userId);

    return onSnapshot(
        userDocRef,
        (docSnap) => {
            if (!docSnap.exists()) {
                onChange([]);
                return;
            }

            const joinedRooms: string[] = docSnap.data().joinedRooms || [];
            onChange(joinedRooms);
        },
        (error) => {
            onError(error instanceof Error ? error : new Error(String(error)));
        }
    );
}