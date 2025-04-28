import {useNavigate} from "react-router";
import checkRoomExistence from "@/features/rooms/api/checkRoomExistence.ts";
import {formatRoomCode} from "@/features/rooms/lib/utils.ts";
import {useEffect, useState} from "react";

export default function useNavigateToRoom(roomCode: string) {
    const navigate = useNavigate();
    const [isRoomExisting, setIsRoomExisting] = useState<boolean>(false);

    useEffect(() => {
        const checkRoom = async () => {
            if (roomCode) {
                const exists = await checkRoomExistence(roomCode);
                setIsRoomExisting(exists);
            }
        };

        checkRoom();
    }, [roomCode]);

    const formattedRoomCode = roomCode.length === 11 ? roomCode : formatRoomCode(roomCode);

    const handleNavigate = () => {
        if (formattedRoomCode && isRoomExisting) {
            navigate(`/rooms/${roomCode}`);
        }
    };

    return {isRoomExisting, handleNavigate};
}
