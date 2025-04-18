import {useMessages} from "../hooks/useMessages.ts";
import Message from "@/components/Message.tsx";
import {useUser} from "@/hooks/useUser.tsx";
import MessageBoardStatus from "@/components/MessageBoardStatus.tsx";

// Responsible for rendering the list of messages or status messages

export default function MessageBoard() {
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
            <MessageBoardStatus messages={messages} isLoading={isLoading} error={error} />
            {messageElements}
        </div>
    );
}