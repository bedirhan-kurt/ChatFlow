import {toReadableDate} from "@/shared/lib/utils/toReadableDate.ts";
import {useEffect, useState} from "react";
import {collection, onSnapshot, query, orderBy, limit} from "firebase/firestore";
import {db} from "@/shared/api/firebaseConfig.ts";
import {useParams} from "react-router";

type Message = {
    id: string;                // Mesajın benzersiz ID'si
    authorId: string;          // Yazarın kullanıcı ID'si
    authorUsername: string;    // Yazarın kullanıcı adı
    content: string;           // Mesaj içeriği
    createdAt: string;         // Mesajın gönderildiği zaman (ISO 8601 formatında)
    roomCode: string;          // Sohbet odasının kodu
};

export function useFetchMessages() {
    const { roomCode } = useParams();
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!roomCode) return;

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
