import {useContext} from "react";
import {
    JoinedRoomsContext
} from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/context/JoinedRoomsContext.tsx";

export default function useJoinedRooms() {
    const context = useContext(JoinedRoomsContext);
    if (context === undefined) {
        throw new Error("useJoinedRoomsContext must be used within a JoinedRoomsProvider");
    }
    return context;
}