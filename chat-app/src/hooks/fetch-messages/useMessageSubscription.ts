import React, { useEffect } from "react";
import { db } from "@/api/firebaseConfig.ts";
import { collection, onSnapshot } from "firebase/firestore";

type Messages = {
    id: string;
    [key: string]: any;
};

export function useMessageSubscription(
    setMessages: React.Dispatch<React.SetStateAction<Messages[]>>
) {
    useEffect(() => {
        const messageRef = collection(db, "messages");

        const unsubscribe = onSnapshot(messageRef, (snapshot) => {
            setMessages((prev) => {
                let updatedMessages = [...prev];

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

                const unique = Array.from(new Map(updatedMessages.map((m) => [m.id, m])).values());
                return unique.slice(-10);
            });
        });

        return () => unsubscribe();
    }, [setMessages]);
}
