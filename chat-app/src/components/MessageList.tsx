import {useMessages} from "../hooks/useMessages.ts";
import Message from "@/components/Message.tsx";
import {useUser} from "@/hooks/useUser.tsx";

export default function MessageList() {
    const { messages, isLoading, error } = useMessages();
    const { user } = useUser();

    const messageElements = messages.map((message) => (
        <Message
            key={message.id}
            id={message.id}
            message={message.messageContent}
            author={message.authorUsername}
            isOwned={message.uid === user.uid}
            createdAt={message.createdAt}
        />
    ));

    return (
        <div className="h-full flex flex-col gap-4 overflow-y-auto">
            {isLoading ? (
                <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                    <p>Loading...</p>
                </div>
            ) : error ? (
                <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                    <p>Error: {error.message}</p>
                </div>
            ) : messageElements.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                    <p>No messages yet.</p>
                </div>
            ) : (
                messageElements
            )}
        </div>
    );
}