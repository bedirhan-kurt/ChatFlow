import { Send } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import addNewMessage from "@/api/addNewMesssage.ts";
import React from "react";

export default function SendButton({ messageContentRef, author }: { messageContentRef: React.RefObject<string>, author: string }) {
    const handleClick = () => {
        const messageContent = messageContentRef.current;
        addNewMessage(messageContent, author);
    };

    return (
        <Button className="w-16 h-full" onClick={handleClick}><Send className="size-5" /></Button>
    );
}