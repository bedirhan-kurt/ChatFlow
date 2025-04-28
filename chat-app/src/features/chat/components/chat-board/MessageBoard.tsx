import Message from "@/features/chat/components/message/Message.tsx";
import {useUser} from "@/features/users/hooks/useUser.tsx";
import MessageBoardStatus from "@/features/chat/components/chat-board/MessageBoardStatus.tsx";
import {useFetchMessages} from "@/features/chat/hooks/useFetchMessages.ts";

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
    const { user } = useUser();
    const { messages, isLoading, error } = useFetchMessages();

    if (isLoading || error) {
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
            message={message.content}
            author={message.authorUsername}
            isOwned={message.authorId === user.uid}
            createdAt={message.createdAt}
        />
    ));

    return (
        <div
            className="h-full flex flex-col gap-4 overflow-y-auto"
            style={{
                backgroundImage: "url('/src/assets/Grid%2004.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {messageElements}
        </div>
    );
}