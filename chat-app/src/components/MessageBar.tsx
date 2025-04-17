import {Textarea} from "@/components/ui/textarea.tsx";
import {Send} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import ProfaneAlert from "@/components/ProfaneAlert.tsx";
import {useSendMessage} from "@/hooks/useSendMessage.tsx";

// Responsible for component rendering

export default function MessageBar() {
    const {messageContent, handleMessageChange ,handleClick, handleKeyDown} = useSendMessage();

    return (
        <div className='flex flex-col gap-2'>
            <ProfaneAlert />
            <div className="flex gap-4">
                <Textarea
                    placeholder="Type your message..."
                    className="resize-none h-2"
                    value={messageContent}
                    onChange={handleMessageChange}
                    onKeyDown={handleKeyDown}
                />
                <Button variant="ghost" className="w-16 h-full" onClick={handleClick}><Send
                    className="size-5"/></Button>
            </div>
        </div>

    );
}