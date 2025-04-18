/**
 * MessageBoardStatus Component
 *
 * Responsible for checking the chat data and rendering the appropriate message.
 * This component displays different states based on the provided props:
 * - A loading message when data is being fetched.
 * - An error message if an error occurs.
 * - A "no messages" message if the messages array is empty.
 *
 * Features:
 * - Dynamically renders content based on the `isLoading`, `error`, and `messages` props.
 * - Provides user feedback for loading, error, and empty states.
 *
 * Props:
 * - `isLoading` (boolean): Indicates whether the data is currently being loaded.
 * - `error` (Error | null): Represents an error object if an error occurs, otherwise null.
 * - `messages` (any[]): An array of messages to check for content.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {boolean} props.isLoading - Indicates loading state.
 * @param {Error | null} props.error - Error object or null.
 * @param {any[]} props.messages - Array of messages.
 * @returns {TSX.Element} The rendered MessageBoardStatus component.
 */

export default function MessageBoardStatus({isLoading, error, messages}: { isLoading: boolean; error: Error | null; messages: any[] }) {
    return (
        <>
            {isLoading ? (
                <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                    <p>Loading...</p>
                </div>
            ) : error ? (
                <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                    <p>Error: {error.message}</p>
                </div>
            ) : messages.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                    <p>No messages yet.</p>
                </div>
            ) : null}
        </>
    );
}