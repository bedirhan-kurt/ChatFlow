import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/shared/api/firebaseConfig.ts";
import { getMembersData } from "@/features/chat [page]/users-menu [section]/room-members-list [feat]/api/getMembersData.ts";
import {useUser} from "@/features/chat [page]/[page-core]/hooks [core]/useUser.tsx";
import {useRoom} from "@/features/chat [page]/[page-core]/hooks [core]/useRoom.tsx";

type Member = {
    uid: string;
    username: string;
    isOnline: boolean;
};

export function useFetchMembersMetadata() {
    const { roomCode } = useRoom();
    const { username } = useUser();

    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!roomCode || roomCode === "No Room Selected") return;

        const roomDocRef = doc(db, "rooms", roomCode);
        const unsubscribe = onSnapshot(roomDocRef, async (snapshot) => {
            try {
                const data = snapshot.data();
                const memberIds = data?.members || [];

                const memberData = await Promise.all(
                    memberIds.map(async (id: string) => await getMembersData(id))
                );

                // Since getMembersData now always returns a Member object, we can safely cast
                setMembers(memberData as Member[]);
                setError(null);
                setLoading(false);
            } catch (err) {
                setError(err as Error);
            }
        });

        return () => unsubscribe();
    }, [roomCode, username]);

    return { members, loading, error };
}
