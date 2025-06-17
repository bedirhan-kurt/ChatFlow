import { useEffect, useState } from "react";
import {
    collection,
    onSnapshot,
} from "firebase/firestore";
import { db } from "@/shared/api/firebaseConfig.ts";
import {toReadableDate} from "@/shared/lib/utils/toReadableDate.ts";
import {useRoom} from "@/features/chat [page]/[page-core]/hooks [core]/useRoom.tsx";

type LastMessageMap = Record<string, { content: string; createdAt: string }>;

export function useFetchLastMessages() {
    const { roomCode } = useRoom();
    const [lastMessages, setLastMessages] = useState<LastMessageMap>({});

    useEffect(() => {
        if (!roomCode) return;

        const lastMessagesRef = collection(db, "rooms", roomCode, "lastMessages");

        const unsubscribe = onSnapshot(lastMessagesRef, (snapshot) => {
            const data: LastMessageMap = {};

            snapshot.forEach((doc) => {
                const { content, createdAt } = doc.data();
                data[doc.id] = {
                    content,
                    createdAt: toReadableDate(createdAt)
                };
            });
            setLastMessages(data);
        });

        return () => unsubscribe();
    }, [roomCode]);

    return { lastMessages };
}