// useSendMessage.ts
import { useState } from 'react';
import addNewMessage from "@/features/chat [page]/chat-area [section]/api/addNewMesssage.ts";
import {useUser} from "@/features/chat [page]/[page-core]/hooks [core]/useUser.tsx";
import saveLastMessage from "@/features/chat [page]/chat-area [section]/api/saveLastMessage.ts";
import {useRoom} from "@/features/chat [page]/[page-core]/hooks [core]/useRoom.tsx";

export const useSendMessage = (messageContent: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { roomCode } = useRoom()
    const { user, username } = useUser();

    const handleSendMessage = async () => {
        if (!roomCode) {
            console.error('roomCode is required');
            return;
        }
        console.log("roomCode", roomCode);
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
