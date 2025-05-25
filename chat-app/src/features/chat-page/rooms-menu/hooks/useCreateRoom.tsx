import { useState, useCallback } from "react";
import createNewRoom from "@/features/chat-page/rooms-menu/api/createNewRoom.ts";
import { useUser } from "@/features/chat-page/header-menu/hooks/useUser.tsx";

type CreateRoomInput = {
    roomName: string;
    canEveryoneJoin?: boolean;
};

export function useCreateRoom() {
    const { user, username } = useUser();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);


    const createRoom = useCallback(async (data: CreateRoomInput) => {
        setLoading(true);
        setError(null);
        try {
            const roomCode = await createNewRoom({
                uid: user.uid,
                username: username,
                roomName: data.roomName,
                canEveryoneJoin: data.canEveryoneJoin,
            });

            return { roomCode };
        } catch (err) {
            const error = err instanceof Error ? err : new Error("Unknown error");
            setError(error);
            return { error };
        } finally {
            setLoading(false);
        }
    }, [user]);

    return { createRoom, loading, error };
}
