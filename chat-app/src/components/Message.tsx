import {Card, CardContent} from "@/components/ui/card.tsx";
import {MessageOptionsDropdown} from "@/components/MessageOptionsDropdown.tsx";
import {createContext} from "react";
import MessageDeleteButton from "@/components/MessageDeleteButton.tsx";
import MessageEditButton from "@/components/MessageEditButton.tsx";

interface MessageContextType {
    id: string;
}

export const MessageContext = createContext<MessageContextType>({id: ""});

export default function Message({id, message, author, isOwned = false}: {
    id: string,
    message: string,
    author: string,
    isOwned?: boolean
}) {
    return (
        <MessageContext.Provider value={{id}}>
            <div className={`w-full flex flex-col gap-2 ${isOwned ? "items-end" : "items-start"}`}>
                <div className={`flex flex-col gap-1 ${isOwned ? "items-end" : "items-start"}`}>
                    <div className="flex gap-2 items-center">
                        <span className="font-medium">{isOwned ? "You" : author}</span>
                    </div>
                    <Card
                        className={`w-fit p-3 flex gap-2 text-sm 
                            ${isOwned ? "bg-gray-100 text-black dark:bg-input dark:text-primary" : author === "ADMIN" ? "bg-primary text-white dark:bg-red-500 dark:text-white" : "bg-primary-500 dark:bg-secondary dark:text-white"}
                        `}
                    >
                        <CardContent className="p-0 flex gap-2 items-center">
                            {isOwned ? (
                                <MessageOptionsDropdown>
                                    <MessageDeleteButton/>
                                    <MessageEditButton/>
                                </MessageOptionsDropdown>
                            ) : null}
                            {message}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </MessageContext.Provider>
    );
}