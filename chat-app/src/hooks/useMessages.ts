import { db } from "../api/firebaseConfig.ts";
import {collection, getDocs, limit, onSnapshot, orderBy, query} from "firebase/firestore";
import {useEffect, useState} from "react";
import {toReadableDate} from "../lib/utils.ts";

type Messages = {
    id: string;
    [key: string]: any;
};

export function useMessages() {
    const [messages, setMessages] = useState<Messages[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const messageRef = collection(db, "messages");

        // İlk başta, son 10 mesajı getir
        const q = query(messageRef, orderBy("createdAt", "desc"), limit(10));

        // İlk veri çekme işlemi
        getDocs(q)
            .then((snapshot) => {
                const messageData: Messages[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: toReadableDate(doc.data().createdAt) // Firestore timestamp'ı JavaScript tarihine çevir
                }));
                setMessages(messageData.reverse()); // En eskiye doğru sıralar
            })
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));

        // Gerçek zamanlı güncellemeleri dinler
        const unsubscribe = onSnapshot(messageRef, (snapshot) => {
            setMessages((prev) => {
                let updatedMessages = [...prev];

                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        updatedMessages = [...updatedMessages, { id: change.doc.id, ...change.doc.data() }];
                    } else if (change.type === "modified") {
                        updatedMessages = updatedMessages.map((msg) =>
                            msg.id === change.doc.id ? { id: change.doc.id, ...change.doc.data() } : msg
                        );
                    } else if (change.type === "removed") {
                        updatedMessages = updatedMessages.filter((msg) => msg.id !== change.doc.id);
                    }
                });

                const uniqueMessages = Array.from(new Map(updatedMessages.map((msg) => [msg.id, msg])).values());
                return uniqueMessages.slice(-10);

            });
        });

        return () => unsubscribe();
    }, []);

    return { messages, isLoading, error };
}