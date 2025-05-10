import { Button } from "@/shared/components/ui/button";
import useRoomNavigation from "@/features/rooms/hooks/useRoomNavigation.ts";
import useCreateRoom from "@/features/rooms/hooks/useCreateRoom.ts";

export default function RoomActionsMenu() {
    const {roomCode, handleCreateRoom} = useCreateRoom();
    const {navigateToRoom} = useRoomNavigation();

    return (
        <>
            {roomCode ?
                <div className={'flex flex-col gap-2'}>
                    <span className='font-semibold text-sm'>Your room has been created. Here's your room code:</span>
                    <span className='text-xl font-bold'>{roomCode}</span>
                    <span className='text-sm'>Share this code with your friends to invite them to join your room.</span>
                    <Button onClick={() => navigateToRoom(roomCode)}>Continue to room</Button>
                </div> :
                <Button variant={'secondary'} onClick={handleCreateRoom}>Create room</Button>
            }
        </>
    );
}