import {toReadableDate} from "@/features/chat/lib/utils.ts";
import {useEffect, useState} from "react";
import {collection, getDocs, limit, orderBy, query, onSnapshot, DocumentData} from "firebase/firestore";
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

        const fetchInitialMessages = async () => {
            try {
                const q = query(messageRef, orderBy("createdAt", "desc"), limit(10));
                const snapshot = await getDocs(q);

                const initial = snapshot.docs.map(doc => {
                    const data = doc.data() as DocumentData;
                    const msgData: Message = {
                        id: doc.id,
                        authorId: data.authorId,
                        authorUsername: data.authorUsername,
                        content: data.content,
                        createdAt: toReadableDate(data.createdAt),
                        roomCode: data.roomCode,
                    };

                    return msgData;
                });
                setMessages(initial.reverse());
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInitialMessages();

        const unsubscribe = onSnapshot(messageRef, snapshot => {
            setMessages(prev => {
                let updated = [...prev];
                snapshot.docChanges().forEach(change => {
                    const data = change.doc.data() as DocumentData;
                    const msgData: Message = {
                        id: change.doc.id,
                        authorId: data.authorId,
                        authorUsername: data.authorUsername,
                        content: data.content,
                        createdAt: toReadableDate(data.createdAt),
                        roomCode: data.roomCode,
                    };

                    if (change.type === "added") {
                        updated = [...updated, msgData];
                    } else if (change.type === "modified") {
                        updated = updated.map(m => m.id === msgData.id ? msgData : m);
                    } else if (change.type === "removed") {
                        updated = updated.filter(m => m.id !== msgData.id);
                    }
                });
                const unique = Array.from(new Map(updated.map(m => [m.id, m])).values());
                return unique.slice(-10);
            });
        });

        return () => unsubscribe();
    }, [roomCode]);

    return { messages, isLoading, error };
}
