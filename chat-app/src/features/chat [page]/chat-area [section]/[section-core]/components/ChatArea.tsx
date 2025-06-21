import NewMessageForm from "@/features/chat [page]/chat-area [section]/message-sending [feat]/components/NewMessageForm.tsx";
import {useFetchMessages} from "@/features/chat [page]/chat-area [section]/messages-list [feat]/hooks/useFetchMessages.ts";
import {useDottedBackgroundStyle} from "@/features/chat [page]/chat-area [section]/messages-list [feat]/hooks/useDottedBackgroundStyle.ts";
import MessageAreaStatus
    from "@/features/chat [page]/chat-area [section]/messages-list [feat]/components/message-board-content/MessageAreaStatus.tsx";
import MessageList
    from "@/features/chat [page]/chat-area [section]/messages-list [feat]/components/message-board-content/MessageList.tsx";

export default function ChatArea({ className }: { className?: string }) {
    const dottedBackgroundStyle = useDottedBackgroundStyle();

    const { messages, isLoading, error } = useFetchMessages();
    const isMessagesEmpty = isLoading || error || !messages.length;

    return (
        <div className={`flex flex-col h-full max-h-full ${className ?? ""}`} style={dottedBackgroundStyle}>
            <div className="flex flex-col overflow-y-auto flex-grow p-4">
                    {isMessagesEmpty ? (
                        <div className="flex-grow overflow-y-auto px-4 py-4">
                            <MessageAreaStatus messages={messages} isLoading={isLoading} error={error} />
                        </div>
                    ) : (
                        <MessageList messages={messages} />
                    )}
            </div>
            <div className="border-t shrink-0">
                <NewMessageForm />
            </div>
        </div>
    )
}