import { useEffect, useState } from "react";
import {
    collection,
    onSnapshot,
} from "firebase/firestore";
import { db } from "@/shared/api/firebaseConfig.ts";
import { useParams } from "react-router";
import {toReadableDate} from "@/features/chat/lib/utils.ts";

type LastMessageMap = Record<string, { content: string; createdAt: string }>;

export function useFetchLastMessages() {
    const { roomCode } = useParams();
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