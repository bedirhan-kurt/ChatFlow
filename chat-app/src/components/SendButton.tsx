import { Send } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import addNewMessage from "@/api/addNewMesssage.ts";

export default function SendButton({ messageContentRef, author }: { messageContentRef: React.RefObject<string>, author: string }) {
    const handleClick = () => {
        const messageContent = messageContentRef.current;  // messageContentRef'ten doğrudan değer alıyoruz
        addNewMessage(messageContent, author);
        console.log("Sending message: ", messageContent);  // Mesaj içeriği konsola yazdırılıyor
    };

    return (
        <Button className="w-16 h-full" onClick={handleClick}><Send className="size-5" /></Button>
    );
}