import React, { useEffect } from "react";
import { db } from "@/shared/api/firebaseConfig.ts";
import { collection, onSnapshot } from "firebase/firestore";

type Messages = {
    id: string;
    [key: string]: any;
};

/**
 * Custom React hook to subscribe to real-time updates from a Firestore collection.
 *
 * This hook listens for changes in the "messages" collection in Firestore and updates
 * the state with the latest messages. It handles added, modified, and removed messages
 * and ensures the state contains only unique messages, limited to the latest 10.
 *
 * @param {React.Dispatch<React.SetStateAction<Messages[]>>} setMessages - A state updater function to update the messages state.
 */
export function useMessageSubscription(
    setMessages: React.Dispatch<React.SetStateAction<Messages[]>>
) {
    useEffect(() => {
        // Reference to the "messages" collection in Firestore
        const messageRef = collection(db, "messages");

        // Subscribe to real-time updates from the Firestore collection
        const unsubscribe = onSnapshot(messageRef, (snapshot) => {
            setMessages((prev) => {
                let updatedMessages = [...prev];

                // Process document changes (added, modified, removed)
                snapshot.docChanges().forEach((change) => {
                    const msgData = {
                        id: change.doc.id,
                        ...change.doc.data(),
                    };

                    if (change.type === "added") {
                        updatedMessages = [...updatedMessages, msgData];
                    } else if (change.type === "modified") {
                        updatedMessages = updatedMessages.map((msg) =>
                            msg.id === change.doc.id ? msgData : msg
                        );
                    } else if (change.type === "removed") {
                        updatedMessages = updatedMessages.filter((msg) => msg.id !== change.doc.id);
                    }
                });

                // Ensure unique messages and limit to the latest 10
                const unique = Array.from(new Map(updatedMessages.map((m) => [m.id, m])).values());
                return unique.slice(-10);
            });
        });

        // Cleanup function to unsubscribe from Firestore updates
        return () => unsubscribe();
    }, [setMessages]);
}