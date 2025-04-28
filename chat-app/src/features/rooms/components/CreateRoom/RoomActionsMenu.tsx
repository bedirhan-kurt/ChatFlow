import {useCreateRoom} from "@/features/rooms/hooks/useCreateRoom.tsx";
import { Button } from "@/shared/components/ui/button";
import useNavigateToRoom from "@/features/rooms/hooks/useNavigateToRoom.ts";

export default function RoomActionsMenu() {
    const {roomCode} = useCreateRoom();
    const {handleNavigate} = useNavigateToRoom(roomCode);
    const {handleCreateRoom} = useCreateRoom();

    return (
        <>
            {roomCode ?
                <div className={'flex flex-col gap-2'}>
                    <span className='font-semibold text-sm'>Your room has been created. Here's your room code:</span>
                    <span className='text-xl font-bold'>{roomCode}</span>
                    <span className='text-sm'>Share this code with your friends to invite them to join your room.</span>
                    <Button onClick={handleNavigate}>Continue to room</Button>
                </div> :
                <Button variant={'secondary'} onClick={handleCreateRoom}>Create room</Button>
            }
        </>
    );
}