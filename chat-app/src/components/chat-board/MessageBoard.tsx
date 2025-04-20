import {useMessages} from "../../hooks/fetch-messages/useMessages.ts";
import Message from "@/components/message/Message.tsx";
import {useUser} from "@/hooks/useUser.tsx";
import MessageBoardStatus from "@/components/chat-board/MessageBoardStatus.tsx";

/**
 * MessageBoard Component
 *
 * Responsibility:
 * Responsible for rendering the list of messages or status messages.
 * This component fetches user messages and displays each message using the `Message` component.
 * It also uses the `MessageBoardStatus` component to show loading or error states.
 *
 * Features:
 * - Displays a list of user messages.
 * - Shows loading or error states when applicable.
 * - Identifies whether a message belongs to the current user.
 *
 * Dependencies:
 * - `useMessages` hook for fetching messages and their status.
 * - `Message` component for rendering individual messages.
 * - `useUser` hook for retrieving the current user information.
 * - `MessageBoardStatus` component for displaying status messages.
 *
 * @component
 * @returns {TSX.Element} The rendered MessageBoard component.
 */

export default function MessageBoard() {
    const { messages, isLoading, error } = useMessages();
    const { user, loading } = useUser();

    if (loading) {
        return (
            <div className="h-full flex flex-col gap-4 overflow-y-auto">
                <MessageBoardStatus messages={messages} isLoading={isLoading} error={error}/>
            </div>
        )
    }

    /**
     * Renders the list of messages.
     * Each message is represented by the `Message` component.
     */
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
            {messageElements}
        </div>
    );
}