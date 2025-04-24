import { Button } from "@/shared/components/ui/button.tsx";
import {useCreateRoom} from "@/features/rooms/hooks/useCreateRoom.tsx";

export default function CreateRoomButton() {
    const {handleClick} = useCreateRoom();

    return (
        <Button variant={'secondary'} onClick={handleClick}>Create room</Button>
    );
}