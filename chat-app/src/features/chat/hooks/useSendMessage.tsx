import React, {createContext, useContext, useState, ReactNode} from 'react';
import {useUser} from "@/features/users/hooks/useUser.tsx";
import addNewMessage from "@/features/chat/api/addNewMesssage.ts";
import {Filter} from "bad-words";

interface MessageContextType {
    user: string;
    username: string;
    messageContent: string;
    setMessageContent: (message: string) => void;
    isProfane: boolean;
    handleMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement> | string) => void;
    handleClick: () => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageContextProvider = ({children}: { children: ReactNode }) => {
    const {user, username} = useUser();
    const [messageContent, setMessageContent] = useState("");
    const [isProfane, setIsProfane] = useState(false);

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement> | string) => {
        if (typeof e === "string") {
            setMessageContent((prev) => prev + e);
        } else {
            setMessageContent(e.target.value);
        }
    };

    const handleClick = () => {
        const filter = new Filter()

        if (filter.isProfane(messageContent)) {
            setIsProfane(true)
        } else {
            setIsProfane(false)
            addNewMessage({messageContent, user, username})
                .then(() => {
                    setMessageContent("")
                })
                .catch((err) => console.error(err));
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleClick();
        }
    }

    return (
        <MessageContext.Provider value={
            {
                user, username, messageContent, setMessageContent, isProfane, handleMessageChange, handleClick, handleKeyDown
            }
        }>
            {
                children
            }
        </MessageContext.Provider>
    )
        ;
};

export const useSendMessage = (): MessageContextType => {
    const context = useContext(MessageContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};
