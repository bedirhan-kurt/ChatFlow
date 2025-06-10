import {Send} from "lucide-react";
import {Button} from "@/shared/components/ui/button.tsx";
import ProfaneAlert from "@/features/chat [page]/chat-area [section]/components/new-message-form/ProfaneAlert.tsx";
import MessageFeaturesMenu from "@/features/chat [page]/chat-area [section]/components/new-message-form/message-features/MessageFeaturesMenu.tsx";
import {useSendMessage} from "@/features/chat [page]/chat-area [section]/hooks/useSendMessage.tsx";
import {useMessageContent} from "@/features/chat [page]/chat-area [section]/hooks/useMessageContent.ts";
import {Input} from "@/shared/components/ui/input.tsx";

/**
 * NewMessageForm Component
 *
 * Responsibility:
 * This component provides a form for dark-mode to compose and send new chat-area [section].
 * It includes a textarea for message input, a button to send the message, and
 * an alert for detecting profane content.
 *
 * Features:
 * - Displays a textarea for typing chat-area [section].
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
    const {messageContent, handleInputChange, appendToMessage} = useMessageContent();
    const {handleSendMessage} = useSendMessage(messageContent);

    return (
        <div className='bg-white flex overflow-y-auto flex-col gap-2'>
            <ProfaneAlert messageContent={messageContent}></ProfaneAlert>
            <MessageFeaturesMenu appendToMessage={appendToMessage} />
            <div className="flex gap-4">
                <Input
                    placeholder="Type your message..."
                    className="resize-none flex-1"
                    value={messageContent}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                        }
                    }}
                />
                <Button variant="default" className="w-16 h-full" onClick={handleSendMessage}>
                    <Send className="size-5" />
                </Button>
            </div>
        </div>
    );
}