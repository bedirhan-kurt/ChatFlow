import React, {createContext, useContext, useState, ReactNode} from 'react';
import {useUser} from "@/hooks/useUser.tsx";
import addNewMessage from "@/api/addNewMesssage.ts";
import {Filter} from "bad-words";

interface MessageContextType {
    user: string;
    username: string;
    messageContent: string;
    setMessageContent: (message: string) => void;
    isProfane: boolean;
    handleMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleClick: () => void;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageContextProvider = ({children}: { children: ReactNode }) => {
    const {user, username} = useUser();
    const [messageContent, setMessageContent] = useState("");
    const [isProfane, setIsProfane] = useState(false);

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageContent(e.target.value)
    };

    const handleClick = () => {
        const filter = new Filter()

        if (filter.isProfane(messageContent)) {
            setIsProfane(true)
        } else {
            setIsProfane(false)
            addNewMessage(messageContent, user.uid, username)
                .then(() => {
                    setMessageContent("")
                })
                .catch((err) => console.error(err));
        }
    };

    return (
        <MessageContext.Provider value={
            {
                user, username, messageContent, setMessageContent, isProfane, handleMessageChange, handleClick
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
