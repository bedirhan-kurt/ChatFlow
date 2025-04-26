// MessageContextProvider.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { useUser } from '@/features/users/hooks/useUser';
import { useParams } from 'react-router';
import { useMessageContent } from './useMessageContent';
import { useSendMessage } from './useSendMessage';

interface MessageContextType {
    user: string;
    username: string;
    messageContent: string;
    setMessageContent: (message: string) => void;
    isProfane: boolean;
    isLoading: boolean;
    handleMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement> | string) => void;
    handleSendMessage: () => void;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageContextProvider = ({ children }: { children: ReactNode }) => {
    const { user, username } = useUser();
    const { roomCode } = useParams();
    const { messageContent, handleMessageChange, isProfane } = useMessageContent();
    const { isLoading, handleSendMessage } = useSendMessage(roomCode as string, messageContent, user, username);

    return (
        <MessageContext.Provider
            value={{
                user,
                username,
                messageContent,
                setMessageContent: handleMessageChange,
                isProfane,
                isLoading,
                handleMessageChange,
                handleSendMessage,
            }}
        >
            {children}
        </MessageContext.Provider>
    );
};

export const useSendMessageContext = (): MessageContextType => {
    const context = useContext(MessageContext);
    if (!context) {
        throw new Error('useSendMessageContext must be used within a MessageContextProvider');
    }
    return context;
};
