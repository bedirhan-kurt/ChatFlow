import {useState} from "react";
import {useUser} from "@/features/chat-page/header-menu/hooks/useUser.tsx";
import createNewRoom from "@/features/chat-page/rooms-menu/api/createNewRoom.ts";

export default function useCreateRoom() {
    const [roomCode, setRoomCode] = useState<string | "">("");
    const {user, username} = useUser();

    const handleCreateRoom = async () => {
        try {
            const newRoomCode = await createNewRoom({user, username});
            setRoomCode(newRoomCode); // Save the document ID
        } catch (error) {
            console.error(error); // Log the error or handle it appropriately
        }
    };

    return {roomCode, handleCreateRoom};
}