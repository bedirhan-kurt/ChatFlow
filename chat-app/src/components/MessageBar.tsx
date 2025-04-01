import addNewMessage from "@/api/addNewMesssage.ts";
import {Textarea} from "@/components/ui/textarea.tsx";
import SendButton from "@/components/SendButton.tsx";
import React, {useState} from "react";

export default function MessageBar({ author }: { author: string }) {
    const [messageContent, setMessageContent] = useState("");

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageContent(e.target.value)
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
                        addNewMessage(messageContent, author);
                        setMessageContent("")
                    }
                }}
            />
            <SendButton
                messageContent={messageContent}
                setMessageContent={setMessageContent}
                author={author}
            />
        </div>
    );
}