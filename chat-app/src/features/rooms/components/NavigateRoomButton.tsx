import {Button} from "@/shared/components/ui/button.tsx";
import {useNavigate} from "react-router";

export default function NavigateRoomButton({roomCode}: {roomCode: string | undefined}) {
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