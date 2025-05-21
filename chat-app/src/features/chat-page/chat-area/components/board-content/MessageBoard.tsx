import Message from "@/features/chat-page/chat-area/components/message/Message.tsx";
import {useUser} from "@/features/chat-page/header-menu/hooks/useUser.tsx";
import MessageBoardStatus from "@/features/chat-page/chat-area/components/board-content/MessageBoardStatus.tsx";
import {useFetchMessages} from "@/features/chat-page/chat-area/hooks/useFetchMessages.ts";

/**
 * MessageBoard Component
 *
 * Responsibility:
 * Responsible for rendering the list of chat-area or status chat-area.
 * This component fetches user chat-area and displays each message using the `Message` component.
 * It also uses the `MessageBoardStatus` component to show loading or error states.
 *
 * Features:
 * - Displays a list of user chat-area.
 * - Shows loading or error states when applicable.
 * - Identifies whether a message belongs to the current user.
 *
 * Dependencies:
 * - `useMessages` hook for fetching chat-area and their status.
 * - `Message` component for rendering individual chat-area.
 * - `useUser` hook for retrieving the current user information.
 * - `MessageBoardStatus` component for displaying status chat-area.
 *
 * @component
 * @returns {TSX.Element} The rendered MessageBoard component.
 */

const dottedBackgroundStyle = {
    backgroundImage: 'radial-gradient(circle, rgba(237, 237, 237, 0.6) 2px, transparent 0px)', // opaklık %60
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0',
};

export default function MessageBoard() {
    const {user} = useUser();
    const {messages, isLoading, error} = useFetchMessages();

    if (isLoading || error || messages.length === 0) {
        return (
            <div className="flex flex-col gap-4 overflow-y-auto flex-grow" style={dottedBackgroundStyle}>
                <MessageBoardStatus messages={messages} isLoading={isLoading} error={error}/>
            </div>
        )
    }

    /**
     * Renders the list of chat-area.
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
        <div className="flex flex-col gap-4 overflow-y-auto flex-grow rounded-xl" style={dottedBackgroundStyle}>
            {messageElements}
        </div>
    );
}