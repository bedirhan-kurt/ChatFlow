// useMessageContent.ts
import React, { useState } from 'react';
import { useProfanityCheck } from "@/features/chat/hooks/useProfanityCheck.ts";

export const useMessageContent = () => {
    const [messageContent, setMessageContent] = useState<string>('');
    const { isProfane, checkProfanity } = useProfanityCheck();

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageContent(e.target.value);
    };

    const appendToMessage = (text: string) => {
        setMessageContent(prev => prev + text);
    };

    return { messageContent, handleInputChange, appendToMessage, isProfane, checkProfanity };
};
