import { useEffect, useState } from "react";
import { subscribeToUserRoomCodes } from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/api/subscribeToUserRoomCodes.ts";
import {
    fetchJoinedRoomsData
} from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/api/fetchJoinedRoomsData.ts";
import {FieldValue} from "firebase/firestore";

export type Room = {
    name: string;
    createdAt: FieldValue;
    creatorId: string;
    creatorUsername: string;
    members: string[];
    roomCode: string;
};

export function useJoinedRooms(userId: string) {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!userId?.trim()) return;

        setIsLoading(true);
        setError(null);

        const unsubscribe = subscribeToUserRoomCodes(
            userId,
            async (roomCodes) => {
                if (roomCodes.length === 0) {
                    setRooms([]);
                    setIsLoading(false);
                    return;
                }

                try {
                    const rooms = await fetchJoinedRoomsData(roomCodes);
                    setRooms(rooms);
                } catch (err) {
                    setError(err instanceof Error ? err : new Error(String(err)));
                    setRooms([]);
                } finally {
                    setIsLoading(false);
                }
            },
            (err) => {
                setError(err);
                setRooms([]);
                setIsLoading(false);
            }
        );

        return () => unsubscribe();
    }, [userId]);

    return { rooms, isLoading, error };
}
