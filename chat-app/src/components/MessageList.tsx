"use client";
import getAllMessages from "../api/getMessages";
import Message from "@/components/Message.tsx";

export default function MessageList({ownerId}: { ownerId: string }) {
    const {snapshot, loading} = getAllMessages();

    const sortedSnapshot = snapshot?.sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    const messageElements = sortedSnapshot ? sortedSnapshot?.map((message) => {
        return <Message key={message.id} message={message.messageContent} owner={message.author}
                        isOwned={message.author === ownerId}/>
    }) : [];

    return (
        <>
            {messageElements?.length <= 0 ? loading ?
                    <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                        <p>Loading...</p>
                    </div>
                    :
                    <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                        <p>No messages yet.</p>
                    </div> :
                messageElements}
        </>
    );
}