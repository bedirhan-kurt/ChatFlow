import { useCallback } from "react";
import { useNavigate } from "react-router";
import updateUsersJoinedRooms from "@/features/rooms [page]/rooms/api/updateUsersJoinedRooms.ts";
import updateRoomMembers from "@/features/rooms [page]/rooms/api/updateRoomMembers.ts";

export default function useRoomNavigation() {
    const navigate = useNavigate();

    const navigateToRoom = useCallback((roomCode: string) => {
        navigate(`/room/${roomCode}`);
        updateUsersJoinedRooms(roomCode).catch(error =>
            console.error("Error updating dark-mode joined rooms:", error)
        );
        updateRoomMembers(roomCode).catch(error =>
            console.error("Error updating rooms members:", error)
        );
    }, [navigate]);

    return { navigateToRoom };
}
