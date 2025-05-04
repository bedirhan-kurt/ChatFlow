import {useState} from "react";
import {useUser} from "@/features/users/hooks/useUser.tsx";
import addNewRoom from "@/features/rooms/api/addNewRoom.ts";

export default function useCreateRoom() {
    const [roomCode, setRoomCode] = useState<string | "">("");
    const {user, username} = useUser();

    const handleCreateRoom = async () => {
        try {
            const newRoomCode = await addNewRoom({user, username});
            setRoomCode(newRoomCode); // Save the document ID
        } catch (error) {
            console.error(error); // Log the error or handle it appropriately
        }
    };

    return {roomCode, handleCreateRoom};
}