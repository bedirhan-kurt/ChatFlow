import {Button} from "@/shared/components/ui/button.tsx";
import {useNavigate} from "react-router";
import {useCreateRoom} from "@/features/rooms/hooks/useCreateRoom.tsx";

export default function NavigateRoomButton() {
    const {roomCode} = useCreateRoom();
    const navigate = useNavigate();

    function handleClick() {
        if (roomCode) {
            navigate(`/room/${roomCode}`);
        } else {
            console.error("Room code is undefined");
        }
    }

    return (
        <Button onClick={handleClick}>Go to the room</Button>
    );
}