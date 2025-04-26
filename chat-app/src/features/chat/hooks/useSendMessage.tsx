// useSendMessage.ts
import { useState } from 'react';
import addNewMessage from "@/features/chat/api/addNewMesssage.ts";

export const useSendMessage = (roomCode: string, messageContent: string, user: any, username: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, handleSendMessage };
};
