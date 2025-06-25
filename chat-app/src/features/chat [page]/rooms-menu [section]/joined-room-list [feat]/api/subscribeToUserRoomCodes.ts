import { db } from "@/shared/api/firebaseConfig.ts";
import { doc, onSnapshot, Unsubscribe } from "firebase/firestore";

export function subscribeToUserRoomCodes(
    userId: string,
    onChange: (roomIds: string[]) => void,
    onError: (error: Error) => void
): Unsubscribe {
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