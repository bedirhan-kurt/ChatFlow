import { db } from "../api/firebaseConfig.ts";
import { collection, onSnapshot, QuerySnapshot, DocumentData, orderBy, query, limit } from "firebase/firestore";
import { useState, useEffect } from "react";

// All messages will be in the form this interface. It is flexible for different length of items.
interface Messages {
    id: string;
    [key: string]: any
}

export default function useAllMessages() {
    const [messages, setMessages] = useState<Messages[]>([]); // List of message items that message id and message content
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const messageRef = collection(db, "messages")

        // Querying the messages collection by createdAt field in ascending order.
        const q = query(messageRef, orderBy("createdAt", "asc"), limit(45));

        // This is cleanup function for unsubscribing the listener.
        // onSnapshot stops listening automatically when it is called with a cleanup function. Like a toggle.
        const unsubscribe = onSnapshot(
            q,
            {includeMetadataChanges: true},
            (snapshot: QuerySnapshot<DocumentData>) => {
                const messageData: Messages[] = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))

                setMessages(messageData)
                setIsLoading(false);
            },
            (error) => {
                setError(error)
                setIsLoading(false)
            }
        )

        return () => unsubscribe() // Running cleanup function when the component unmounts or when will be re-rendered.
    }, [])

    return { messages, isLoading, error };
}