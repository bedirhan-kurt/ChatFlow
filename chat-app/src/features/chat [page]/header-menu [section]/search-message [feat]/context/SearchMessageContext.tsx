import React, { createContext, useEffect, useState } from "react";
import { useFetchMessages } from "@/features/chat [page]/chat-area [section]/messages-list [feat]/hooks/useFetchMessages";
import { Message } from "@/features/chat [page]/chat-area [section]/messages-list [feat]/lib/types";

interface SearchMessageContextType {
    searchMessage: string;
    setSearchMessage: React.Dispatch<React.SetStateAction<string>>;
    handleSearchMessageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filteredMessages: Message[];
}

const SearchMessageContext = createContext<SearchMessageContextType | undefined>(undefined);

export function SearchMessageProvider({ children }: { children: React.ReactNode }) {
    const { messages } = useFetchMessages();
    const [searchMessage, setSearchMessage] = useState("");
    const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);

    function handleSearchMessageChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchMessage(event.target.value);
    }

    useEffect(() => {
        if (searchMessage.trim() === "") {
            setFilteredMessages(messages);
        } else {
            const lowerCaseSearch = searchMessage.toLowerCase();
            const filtered = messages.filter(message =>
                message.content.toLowerCase().includes(lowerCaseSearch)
            );
            setFilteredMessages(filtered);
        }
    }, [searchMessage, messages]);

    return (
        <SearchMessageContext.Provider value={{ searchMessage, setSearchMessage, handleSearchMessageChange, filteredMessages }}>
            {children}
        </SearchMessageContext.Provider>
    );
}

export {SearchMessageContext}