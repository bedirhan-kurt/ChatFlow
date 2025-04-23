import React, { useEffect, useState } from "react";
import { db } from "@/shared/api/firebaseConfig.ts";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { toReadableDate } from "@/features/chat/lib/utils.ts";

type Messages = {
    id: string;
    [key: string]: any;
};

/**
 * Custom React hook to fetch the initial set of messages from a Firestore collection.
 *
 * This hook retrieves the latest 10 messages from the "messages" collection in Firestore,
 * orders them by their creation date in descending order, and converts the timestamps
 * to a readable date format. The fetched messages are then passed to the provided
 * `setMessages` state updater function.
 *
 * @param {React.Dispatch<React.SetStateAction<Messages[]>>} setMessages - A state updater function to set the fetched messages.
 * @returns {Object} An object containing:
 * - `isLoading` (boolean): Indicates whether the data is still being fetched.
 * - `error` (Error | null): Any error encountered during the fetch operation.
 */
export function useInitialMessages(
    setMessages: React.Dispatch<React.SetStateAction<Messages[]>>
) {
    const [isLoading, setIsLoading] = useState(true); // Tracks the loading state
    const [error, setError] = useState<Error | null>(null); // Tracks any errors

    useEffect(() => {
        /**
         * Fetches the latest messages from the Firestore collection.
         * Orders the messages by creation date and limits the results to 10.
         */
        const fetchMessages = async () => {
            try {
                const messageRef = collection(db, "messages"); // Reference to the "messages" collection
                const q = query(messageRef, orderBy("createdAt", "desc"), limit(10)); // Query to fetch messages
                const snapshot = await getDocs(q); // Execute the query and get the snapshot

                // Map the snapshot data to an array of messages
                const messageData: Messages[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: toReadableDate(doc.data().createdAt), // Convert timestamp to readable date
                }));

                setMessages(messageData.reverse()); // Reverse the order to display oldest messages first
            } catch (err) {
                setError(err as Error); // Handle any errors
            } finally {
                setIsLoading(false); // Set loading to false after fetching
            }
        };

        fetchMessages(); // Call the fetch function
    }, [setMessages]); // Dependency array includes setMessages to avoid unnecessary re-renders

    return { isLoading, error }; // Return loading and error states
}