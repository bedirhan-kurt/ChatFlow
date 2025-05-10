import { useCallback } from "react";
import { useNavigate } from "react-router";
import updateUsersJoinedRooms from "@/features/rooms/api/updateUsersJoinedRooms.ts";
import updateRoomsMemers from "@/features/rooms/api/updateRoomMembers.ts";

export default function useRoomNavigation() {
    const navigate = useNavigate();

    const navigateToRoom = useCallback((roomCode: string) => {
        navigate(`/room/${roomCode}`);
        updateUsersJoinedRooms(roomCode).catch(error =>
            console.error("Error updating users joined rooms:", error)
        );
        updateRoomsMemers(roomCode).catch(error =>
            console.error("Error updating rooms members:", error)
        );
    }, [navigate]);

    return { navigateToRoom };
}