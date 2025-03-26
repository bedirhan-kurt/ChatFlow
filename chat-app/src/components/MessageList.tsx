"use client";
import useAllMessages from "../hooks/useAllMessages.ts";
import Message from "@/components/Message.tsx";

export default function MessageList({ ownerId }: { ownerId: string }) {
    const { messages, loading, error } = useAllMessages();

    const sortedMessages = messages.length > 0 ? messages.sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    ) : [];

    const messageElements = sortedMessages.map((message) => (
        <Message
            key={message.id}
            id={message.id}
            message={message.messageContent}
            owner={message.author}
            isOwned={message.author === ownerId}
        />
    ));

    return (
        <>
            {loading ? (
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
        </>
    );
}