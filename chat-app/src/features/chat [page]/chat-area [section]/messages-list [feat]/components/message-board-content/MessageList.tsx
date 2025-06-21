import {useUser} from "@/features/chat [page]/[page-core]/hooks [core]/useUser.tsx";
import Message from "@/features/chat [page]/chat-area [section]/messages-list [feat]/components/message/Message.tsx";

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
        <div className="flex flex-col gap-4 overflow-y-auto flex-grow rounded-xl">
            {messageElements}
        </div>
    );
}