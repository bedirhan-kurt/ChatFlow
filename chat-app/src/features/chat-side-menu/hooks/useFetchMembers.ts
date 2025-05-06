import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot, DocumentData } from "firebase/firestore";
import { db } from "@/shared/api/firebaseConfig.ts";
import { useParams } from "react-router";
import {getMembersData} from "@/features/chat-side-menu/api/getMembersData.ts";
import {useUser} from "@/features/users/hooks/useUser.tsx";

type Member = {
    uid: string;
    username: string;
    isOnline: boolean;
    lastMessage: string;
};

export function useFetchMembers() {
    const { roomCode } = useParams();
    const { username } = useUser();

    const [members, setMembers] = useState<Member[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!roomCode) return;

        const roomDocRef = doc(db, "rooms", roomCode);

        const fetchMembersData = async () => {
            try {
                const snapshot = await getDoc(roomDocRef);
                if (snapshot.exists()) {
                    const data = snapshot.data() as DocumentData;
                    const membersIds = data.members || [];

                    const membersData: Member[] = await Promise.all(
                        membersIds.map(async (memberId: string) => await getMembersData(memberId))
                    );

                    setMembers(membersData);
                } else {
                    setMembers([]);
                }
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMembersData();

        const unsubscribe = onSnapshot(roomDocRef, async (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.data() as DocumentData;
                const membersIds = data.members || [];

                const membersData: Member[] = await Promise.all(
                    membersIds.map(async (memberId: string) => await getMembersData(memberId))
                );

                setMembers(membersData);
            }
        });

        return () => unsubscribe();
    }, [roomCode, username]);

    return { members, isLoading, error };
}