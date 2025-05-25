import {useState, useCallback} from "react";
import sendJoinRoomRequest from "@/features/chat-page/rooms-menu/api/sendJoinRoomRequest.ts";
import {useParams} from "react-router";

export function useJoinRoom() {
    const {userId} = useParams();

    const [roomCode, setRoomCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRoomCode(e.target.value);
        if (error) {
            setError(null); // Clear error when input changes
        }
    }, [error]);

    const handleJoinRoom = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            await sendJoinRoomRequest(roomCode, userId as string, setError);
        } catch (err: any) {
            setError(err.message || "An error occurred");
        } finally {
            setIsLoading(false);
        }
    }, [roomCode, userId]);

    return {
        roomCode,
        setRoomCode,
        handleInputChange,
        handleJoinRoom,
        isLoading,
        error,
    };
}