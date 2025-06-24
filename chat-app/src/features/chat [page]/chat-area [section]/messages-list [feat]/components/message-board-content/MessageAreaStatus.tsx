/**
 * MessageAreaStatus Component
 *
 * Responsibility:
 * Responsible for checking the chat-area [section] data and rendering the appropriate message.
 * This components displays different states based on the provided props:
 * - A loading message when data is being fetched.
 * - An error message if an error occurs.
 * - A "no chat-area [section]" message if the chat-area [section] array is empty.
 *
 * Features:
 * - Dynamically renders content based on the `isLoading`, `error`, and `chat-area [section]` props.
 * - Provides user feedback for loading, error, and empty states.
 *
 * Props:
 * - `isLoading` (boolean): Indicates whether the data is currently being loaded.
 * - `error` (Error | null): Represents an error object if an error occurs, otherwise null.
 * - `chat-area [section]` (any[]): An array of chat-area [section] to check for content.
 *
 * @components
 * @param {Object} props - The props for the components.
 * @param {boolean} props.isLoading - Indicates loading state.
 * @param {Error | null} props.error - Error object or null.
 * @param {any[]} props.chat-area [section] - Array of chat-area [section].
 * @returns {TSX.Element} The rendered MessageAreaStatus components.
 */
import {Hourglass, PackageOpen} from "lucide-react";

export default function MessageAreaStatus({isLoading, error, messages}: { isLoading: boolean; error: Error | null; messages: any[] }) {
    return (
        <>
            {isLoading ? (
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center text-xl font-semibold">
                    <Hourglass className="size-12" />
                    <p>Loading...</p>
                </div>
            ) : error ? (
                <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                    <p>Error: {error.message}</p>
                </div>
            ) : messages.length === 0 ? (
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center text-xl font-semibold">
                    <PackageOpen className="size-12" />
                    <p>No messages yet.</p>
                </div>
            ) : null}
        </>
    );
}