import React, { useEffect, useState } from "react";
import { db } from "@/api/firebaseConfig.ts";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { toReadableDate } from "@/lib/utils.ts";

type Messages = {
    id: string;
    [key: string]: any;
};

export function useInitialMessages(
    setMessages: React.Dispatch<React.SetStateAction<Messages[]>>
) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const messageRef = collection(db, "messages");
                const q = query(messageRef, orderBy("createdAt", "desc"), limit(10));
                const snapshot = await getDocs(q);

                const messageData: Messages[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: toReadableDate(doc.data().createdAt),
                }));

                // en eski en üstte gözüksün
                setMessages(messageData.reverse());
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMessages();
    }, [setMessages]);

    return { isLoading, error };
}
