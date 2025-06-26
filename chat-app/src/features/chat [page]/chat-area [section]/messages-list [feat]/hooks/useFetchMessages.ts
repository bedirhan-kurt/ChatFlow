import {toReadableDate} from "@/shared/lib/utils/toReadableDate.ts";
import {useEffect, useState} from "react";
import {collection, onSnapshot, query, orderBy, limit} from "firebase/firestore";
import {db} from "@/shared/api/firebaseConfig.ts";
import {useRoom} from "@/features/chat [page]/[page-core]/hooks [core]/useRoom.tsx";
import {Message} from "@/features/chat [page]/chat-area [section]/messages-list [feat]/lib/types.ts";

export function useFetchMessages() {
    const {roomCode} = useRoom()
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!roomCode) {
            setError(new Error('No room selected'));
            return;
        }

        const messageRef = collection(db, "rooms", roomCode, "messages");
        const q = query(messageRef, orderBy("createdAt", "asc"), limit(15));

        const unsubscribe = onSnapshot(q, snapshot => {
            const newMessages = snapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    authorId: data.authorId,
                    authorUsername: data.authorUsername,
                    content: data.content,
                    createdAt: toReadableDate(data.createdAt),
                    roomCode: data.roomCode,
                };
            });

            setMessages(newMessages);
            setIsLoading(false);
        }, (error) => {
            setError(error);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, [roomCode]);

    return { messages, isLoading, error };
}
