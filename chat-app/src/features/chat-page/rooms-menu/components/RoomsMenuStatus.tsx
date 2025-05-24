/**
 * MessageAreaStatus Component
 *
 * Responsibility:
 * Responsible for checking the chat-area data and rendering the appropriate message.
 * This component displays different states based on the provided props:
 * - A loading message when data is being fetched.
 * - An error message if an error occurs.
 * - A "no chat-area" message if the chat-area array is empty.
 *
 * Features:
 * - Dynamically renders content based on the `isLoading`, `error`, and `chat-area` props.
 * - Provides user feedback for loading, error, and empty states.
 *
 * Props:
 * - `isLoading` (boolean): Indicates whether the data is currently being loaded.
 * - `error` (Error | null): Represents an error object if an error occurs, otherwise null.
 * - `chat-area` (any[]): An array of chat-area to check for content.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {boolean} props.isLoading - Indicates loading state.
 * @param {Error | null} props.error - Error object or null.
 * @param {any[]} props.chat-area - Array of chat-area.
 * @returns {TSX.Element} The rendered MessageAreaStatus component.
 */
import {Hourglass, PackageOpen} from "lucide-react";

export default function RoomsMenuStatus({isLoading, error, rooms}: { isLoading: boolean; error: Error | null; rooms: any[] }) {
    return (
        <>
            {isLoading ? (
                <div className="flex flex-col gap-2 items-center justify-center text-xl font-semibold">
                    <Hourglass className="size-12" />
                    <p>Loading...</p>
                </div>
            ) : error ? (
                <div className="flex items-center justify-center text-xl font-semibold">
                    <p>Error: {error.message}</p>
                </div>
            ) : rooms.length === 0 ? (
                <div className="flex flex-col gap-2 items-center justify-center text-lg font-medium">
                    <PackageOpen className="size-12" />
                    <p>No rooms yet.</p>
                </div>
            ) : null}
        </>
    );
}