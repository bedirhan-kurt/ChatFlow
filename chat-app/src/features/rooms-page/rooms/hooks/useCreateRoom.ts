import { useState } from "react";
import { useUser } from "@/features/chat-page/header-menu/hooks/useUser";
import createNewRoom from "@/features/chat-page/rooms-menu/api/createNewRoom";
import CreateRoomParams from "@/features/chat-page/rooms-menu/lib/types.ts";

type CreateRoomResult = {
    roomCode?: string;
    error?: string;
};

export default function useCreateRoom() {
    const [roomCode, setRoomCode] = useState<string | "">("");
    const { user, username } = useUser();

    const handleCreateRoom = async ({
                                        name,
                                        description,
                                        canEveryoneJoin,
                                        passwordProtection,
                                        password,
                                        limitUsers,
                                        maxMembers,
                                        expiryEnabled,
                                        expiryDate,
                                    }: CreateRoomParams): Promise<CreateRoomResult> => {
        try {
            const newRoomCode = await createNewRoom({
                uid: user.uid,
                username,
                name,
                description,
                canEveryoneJoin,
                passwordProtection,
                password,
                limitUsers,
                maxMembers,
                expiryEnabled,
                expiryDate,
            });
            setRoomCode(newRoomCode);
            return { roomCode: newRoomCode };
        } catch (error: any) {
            return { error: error?.message || "Unknown error" };
        }
    };

    return { roomCode, handleCreateRoom };
}