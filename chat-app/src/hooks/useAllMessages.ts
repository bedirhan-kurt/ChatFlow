import { db } from "../api/firebaseConfig.ts";
import { collection, onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";
import { useState, useEffect } from "react";

interface Message {
    id: string;
    [key: string]: any;
}

export default function useAllMessages() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const messagesRef = collection(db, "messages");

        const unsubscribe = onSnapshot(
            messagesRef,
            { includeMetadataChanges: true },
            (snapshot: QuerySnapshot<DocumentData>) => {
                const messagesData: Message[] = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setMessages(messagesData);
                setLoading(false);
            },
            (err: Error) => {
                setError(err);
                setLoading(false);
            }
        );

        // Cleanup function
        return () => unsubscribe();
    }, []);

    return { messages, loading, error };
}

// Copilot