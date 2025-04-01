import addNewMessage from "@/api/addNewMesssage.ts";
import {Textarea} from "@/components/ui/textarea.tsx";
import React, {useState} from "react";
import {Send} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

export default function MessageBar({ author, bottomRef }: { author: string, bottomRef: React.RefObject<HTMLDivElement | null> }) {
    const [messageContent, setMessageContent] = useState("");

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageContent(e.target.value)
    };

    const handleClick = () => {
        addNewMessage(messageContent, author)
            .then(() => setMessageContent(""))
            .catch((err) => console.error(err));
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="w-full h-full flex gap-4">
            <Textarea
                placeholder="Type your message..."
                className="resize-none h-2"
                value={messageContent}
                onChange={handleMessageChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        handleClick();
                    }
                }}
            />
            <Button variant="ghost" className="w-16 h-full" onClick={handleClick}><Send className="size-5" /></Button>
        </div>
    );
}