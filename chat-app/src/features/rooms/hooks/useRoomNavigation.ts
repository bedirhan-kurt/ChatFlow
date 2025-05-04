import { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import checkRoomExistence from "@/features/rooms/api/checkRoomExistence.ts";
import { formatRoomCode } from "@/features/rooms/lib/utils.ts";
import updateUsersJoinedRooms from "@/features/rooms/api/updateUsersJoinedRooms.ts";

export default function useRoomNavigation() {
    const [isRoomExisting, setIsRoomExisting] = useState<boolean | null>(null);
    const navigate = useNavigate();

    const validateRoomCode = useCallback((roomCode: string): string | null => {
        if (roomCode.length === 9 && /^\d{9}$/.test(roomCode)) {
            try {
                return formatRoomCode(roomCode);
            } catch (error) {
                console.error("Invalid room code format:", error);
                return null;
            }
        }
        return roomCode || null;
    }, []);

    const handleCheckAndNavigate = useCallback(async (roomCode: string): Promise<boolean> => {
        const formattedCode = validateRoomCode(roomCode);
        if (!formattedCode) {
            setIsRoomExisting(false);
            return false;
        }

        const exists = await checkRoomExistence(formattedCode);
        setIsRoomExisting(exists);

        if (exists) {
            navigate(`/room/${formattedCode}`);
            updateUsersJoinedRooms(formattedCode)
                .catch(error =>
                    console.error("Error updating users joined rooms:", error)
                )
        }

        return exists;
    }, [navigate, validateRoomCode]);

    const handleNavigateToRoom = useCallback((roomCode: string) => {
        const formattedCode = validateRoomCode(roomCode);
        if (formattedCode) {
            navigate(`/room/${formattedCode}`);
            updateUsersJoinedRooms(formattedCode)
                .catch(error =>
                    console.error("Error updating users joined rooms:", error)
                )
        } else {
            console.warn("Invalid room code. Navigation aborted.");
        }
    }, [navigate, validateRoomCode]);

    return {
        isRoomExisting,
        handleCheckAndNavigate,
        handleNavigateToRoom
    };
}