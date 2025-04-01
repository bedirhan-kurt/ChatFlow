import { Send } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import addNewMessage from "@/api/addNewMesssage.ts";
import React from "react";

export default function SendButton({ messageContent, setMessageContent, author }: { messageContent: string, setMessageContent: React.Dispatch<React.SetStateAction<string>> , author: string }) {
    const handleClick = () => {
        addNewMessage(messageContent, author)
            .then(() => setMessageContent(""))
            .catch((err) => console.error(err));
    };

    return (
        <Button variant="ghost" className="w-16 h-full" onClick={handleClick}><Send className="size-5" /></Button>
    );
}