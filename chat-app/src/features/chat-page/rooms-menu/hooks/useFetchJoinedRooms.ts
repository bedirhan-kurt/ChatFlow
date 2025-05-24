import {useEffect, useState} from "react";
import {fetchJoinedRooms} from "@/features/chat-page/rooms-menu/api/fetchJoinedRooms.ts";

export type Room = {
    createdAt: string;
    creatorId: string;
    creatorUsername: string;
    members: string[];
    roomCode: string;
};

export function useFetchJoinedRooms(userId: string) {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!userId) return;
        setIsLoading(true);
        setError(null);

        fetchJoinedRooms(userId)
            .then((data) => {
                setRooms(Array.isArray(data) ? data : []);
            })
            .catch((err) => {
                setError(err);
                setRooms([]);
            })
            .finally(() => setIsLoading(false));
    }, [userId]);

    return {rooms, isLoading, error};
}

/*
* Request gönderilmesi için oda kodunu tutan inputun yönetimini yapacak, bunu state ile bağlayacak, butona verilmek üzere requesti gönderecek olan fonksiyonu statede kaydedeilen oda kodu ile çağıracak bir hook düşünüyırum. Bunun adı ne olsun? */