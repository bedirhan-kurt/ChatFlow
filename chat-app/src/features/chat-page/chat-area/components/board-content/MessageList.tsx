import Message from "@/features/chat-page/chat-area/components/message/Message.tsx";
import {useUser} from "@/features/chat-page/header-menu/hooks/useUser.tsx";

export default function MessageList({messages}: { messages: any[] }) {
    const {user} = useUser();

    const messageElements = messages.map((message) => (
        <Message
            key={message.id}
            id={message.id}
            message={message.content}
            author={message.authorUsername}
            isOwned={message.authorId === user.uid}
            createdAt={message.createdAt}
        />
    ));

    return (
        <>
            {messageElements}
        </>
    );
}