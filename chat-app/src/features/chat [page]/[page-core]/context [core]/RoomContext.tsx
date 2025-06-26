import React, {createContext, useEffect} from "react";
import {
    useJoinedRooms
} from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/hooks/useJoinedRooms.ts";
import {useUser} from "@/features/chat [page]/[page-core]/hooks [core]/useUser.tsx";

interface RoomContextType {
    roomCode: string;
    loading: boolean;
    error: Error | undefined;
    setRoomCode: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<Error | undefined>>;
}

const RoomContext = createContext<RoomContextType | undefined>(undefined);

export const RoomProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const { user } = useUser()
    const { rooms } = useJoinedRooms(user.uid);

    const [roomCode, setRoomCode] = React.useState<string>(rooms[0]?.roomCode || "No Room");
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<Error | undefined>(undefined);

    useEffect(() => {
        if (rooms.length > 0) {
            setRoomCode(rooms[0].roomCode);
        }
    }, [rooms]);

    return (
        <RoomContext.Provider value={{roomCode, loading, error, setRoomCode, setLoading, setError}}>
            {children}
        </RoomContext.Provider>
    );
};

export default RoomContext;