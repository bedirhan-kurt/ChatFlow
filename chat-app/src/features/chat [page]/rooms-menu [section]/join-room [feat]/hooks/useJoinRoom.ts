import {useState, useCallback} from "react";
import {useParams} from "react-router";
import sendJoinRoomRequest from "../api/sendJoinRoomRequest.ts";

export function useJoinRoom() {
    const {userId} = useParams();

    const [roomCode, setRoomCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCodeChange = useCallback((newCode: string) => {
        setRoomCode(newCode);
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
        handleCodeChange,
        handleJoinRoom,
        isLoading,
        error,
    };
}