import { createContext, useEffect, useState, ReactNode } from "react";
import { subscribeToUserRoomCodes } from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/api/subscribeToUserRoomCodes";
import { fetchJoinedRoomsData } from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/api/fetchJoinedRoomsData";
import { Room } from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/lib/types";
import {useUser} from "@/features/chat [page]/[page-core]/hooks [core]/useUser.tsx";

interface JoinedRoomsContextValue {
    rooms: Room[];
    setRooms: (rooms: (prevRooms: Room[]) => Room[]) => void;
    isLoading: boolean;
    error: Error | null;
    isRoomsEmpty: boolean;
}

export const JoinedRoomsContext = createContext<JoinedRoomsContextValue | undefined>(undefined);

interface JoinedRoomsProviderProps {
    children: ReactNode;
}

export function JoinedRoomsProvider({ children }: JoinedRoomsProviderProps) {
    const { user } = useUser();
    const [rooms, setRooms] = useState<Room[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const userId = user?.uid;

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

    const value: JoinedRoomsContextValue = {
        rooms,
        setRooms,
        isLoading,
        error,
        isRoomsEmpty: rooms.length === 0,
    };

    return (
        <JoinedRoomsContext.Provider value={value}>
            {children}
        </JoinedRoomsContext.Provider>
    );
}