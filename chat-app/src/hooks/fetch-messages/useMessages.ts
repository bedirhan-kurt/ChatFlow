import { useState } from "react";
import { useInitialMessages } from "./useInitialMessages";
import { useMessageSubscription } from "./useMessageSubscription";

type Messages = {
    id: string;
    [key: string]: any;
};

/**
 * Custom React hook to manage messages by combining initial data fetching and real-time updates.
 *
 * This hook uses two other custom hooks:
 * - `useInitialMessages`: Fetches the initial set of messages from a Firestore collection.
 * - `useMessageSubscription`: Subscribes to real-time updates for the messages collection.
 *
 * @returns {Object} An object containing:
 * - `messages` (Messages[]): The list of messages, updated in real-time.
 * - `isLoading` (boolean): Indicates whether the initial data is still being fetched.
 * - `error` (Error | null): Any error encountered during the initial fetch.
 */
export function useMessages() {
    const [messages, setMessages] = useState<Messages[]>([]); // State to store the list of messages
    const { isLoading, error } = useInitialMessages(setMessages); // Fetch initial messages

    useMessageSubscription(setMessages); // Subscribe to real-time updates

    return { messages, isLoading, error }; // Return the messages, loading state, and error
}