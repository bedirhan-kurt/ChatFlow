import addNewMessage from "@/api/addNewMesssage.ts";
import {Textarea} from "@/components/ui/textarea.tsx";
import React, {useState} from "react";
import {AlertCircle, Send} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Filter} from 'bad-words'
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";

export default function MessageBar({uid, authorUsername, bottomRef}: {
    uid: string,
    authorUsername: string,
    bottomRef: React.RefObject<HTMLDivElement | null>
}) {
    const [messageContent, setMessageContent] = useState("");
    const [isProfane, setIsProfane] = useState(false)

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageContent(e.target.value)
    };

    const handleClick = () => {
        const filter = new Filter()

        if (filter.isProfane(messageContent)) {
            setIsProfane(true)
        } else {
            setIsProfane(false)
            addNewMessage(messageContent, uid, authorUsername)
                .then(() => {
                    bottomRef.current?.scrollIntoView({behavior: "smooth"});
                    setMessageContent("")
                })
                .catch((err) => console.error(err));
        }
    };

    return (
        <div className='w-full h-full flex flex-col gap-2'>
            {isProfane ?
                <Alert variant='destructive' className='border-red-500'>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Be polite!</AlertTitle>
                    <AlertDescription>
                        Here is a public chat room. Use a polite language and avoid bad words.
                    </AlertDescription>
                </Alert>
                : null
            }
            <div className="flex gap-4">
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
                <Button variant="ghost" className="w-16 h-full" onClick={handleClick}><Send
                    className="size-5"/></Button>
            </div>
        </div>

    );
}