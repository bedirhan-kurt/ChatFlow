import MessageList from "@/features/chat-page/chat-area/components/board-content/MessageList.tsx";
import NewMessageForm from "@/features/chat-page/chat-area/components/new-message-form/NewMessageForm.tsx";
import { useFetchMessages } from "@/features/chat-page/chat-area/hooks/useFetchMessages.ts";
import MessageAreaStatus from "@/features/chat-page/chat-area/components/board-content/MessageAreaStatus.tsx";

const dottedBackgroundStyle = {
    backgroundImage: 'radial-gradient(circle, rgba(237, 237, 237, 0.6) 2px, transparent 0px)', // opaklık %60
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0',
};

export default function ChatArea({ className }: { className?: string }) {
    const { messages, isLoading, error } = useFetchMessages();
    const isMessagesEmpty = isLoading || error || !messages.length;

    return isMessagesEmpty ? (
        <div className="flex flex-col gap-4 overflow-y-auto flex-grow" style={dottedBackgroundStyle}>
            <MessageAreaStatus messages={messages} isLoading={isLoading} error={error} />
        </div>
    ) : (
        <div className={className}>
            <div className="flex flex-col gap-4 overflow-y-auto flex-grow rounded-xl">
                <MessageList messages={messages} />
            </div>
            <NewMessageForm />
        </div>
    );
}