import MessageList from "@/features/chat [page]/chat-area [section]/components/message-board-content/MessageList.tsx";
import NewMessageForm from "@/features/chat [page]/chat-area [section]/components/new-message-form/NewMessageForm.tsx";
import { useFetchMessages } from "@/features/chat [page]/chat-area [section]/hooks/useFetchMessages.ts";
import MessageAreaStatus from "@/features/chat [page]/chat-area [section]/components/message-board-content/MessageAreaStatus.tsx";

const dottedBackgroundStyle = {
    backgroundImage: 'radial-gradient(circle, rgba(237, 237, 237, 0.6) 2px, transparent 0px)', // opaklık %60
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0',
};

export default function ChatArea({ className }: { className?: string }) {
    const { messages, isLoading, error } = useFetchMessages();
    const isMessagesEmpty = isLoading || error || !messages.length;

    return (
        <div className={`flex flex-col h-full max-h-full ${className ?? ""}`} style={dottedBackgroundStyle}>
            <div className="flex flex-col overflow-y-auto flex-grow">
                    {isMessagesEmpty ? (
                        <div className="flex-grow overflow-y-auto px-4 py-4">
                            <MessageAreaStatus messages={messages} isLoading={isLoading} error={error} />
                        </div>
                    ) : (
                        <MessageList messages={messages} />
                    )}
            </div>
            <div className="border-t p-4 shrink-0">
                <NewMessageForm />
            </div>
        </div>
    )
}