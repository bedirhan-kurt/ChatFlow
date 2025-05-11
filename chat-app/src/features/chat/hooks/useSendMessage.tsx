// useSendMessage.ts
import { useState } from 'react';
import addNewMessage from "@/features/chat/api/addNewMesssage.ts";
import {useUser} from "@/features/users/hooks/useUser.tsx";
import {useParams} from "react-router";
import saveLastMessage from "@/features/chat/api/saveLastMessage.ts";

export const useSendMessage = (messageContent: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { roomCode } = useParams()
    const { user, username } = useUser();

    const handleSendMessage = async () => {
        if (!roomCode) {
            console.error('roomCode is required');
            return;
        }
        try {
            setIsLoading(true);
            await addNewMessage({
                roomCode,
                authorId: user.uid,
                authorUsername: username,
                content: messageContent,
                createdAt: new Date().toISOString(),
            });

            await saveLastMessage(roomCode, {
                authorId: user.uid,
                content: messageContent,
            })
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, handleSendMessage };
};
