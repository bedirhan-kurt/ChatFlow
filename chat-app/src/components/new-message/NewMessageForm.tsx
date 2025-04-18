import {Textarea} from "@/components/ui/textarea.tsx";
import {Send} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import ProfaneAlert from "@/components/new-message/ProfaneAlert.tsx";
import {useSendMessage} from "@/hooks/useSendMessage.tsx";

/**
 * NewMessageForm Component
 *
 * Responsibility:
 * This component provides a form for users to compose and send new messages.
 * It includes a textarea for message input, a button to send the message, and
 * an alert for detecting profane content.
 *
 * Features:
 * - Displays a textarea for typing messages.
 * - Includes a send button with an icon.
 * - Shows a profanity alert if inappropriate content is detected.
 * - Handles message input, submission, and keyboard interactions.
 *
 * Hooks:
 * - `useSendMessage`: Custom hook to manage message state and event handlers.
 *
 * @component
 * @returns {TSX.Element} The rendered NewMessageForm component.
 */

export default function NewMessageForm() {
    const {messageContent, handleMessageChange, handleClick, handleKeyDown} = useSendMessage();

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
                <Button variant="ghost" className="w-16 h-full" onClick={handleClick}>
                    <Send className="size-5" />
                </Button>
            </div>
        </div>
    );
}