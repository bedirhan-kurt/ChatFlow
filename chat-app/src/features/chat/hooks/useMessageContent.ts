// useMessageContent.ts
import React, { useState } from 'react';
import { useProfanityCheck } from "@/features/chat/hooks/useProfanityCheck.ts";

export const useMessageContent = () => {
    const [messageContent, setMessageContent] = useState<string>('');
    const { isProfane, checkProfanity } = useProfanityCheck();

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement> | string) => {
        if (typeof e === 'string') {
            setMessageContent((prev) => prev + e);
        } else {
            setMessageContent(e.target.value);
        }
    };

    return { messageContent, handleMessageChange, isProfane, checkProfanity };
};
