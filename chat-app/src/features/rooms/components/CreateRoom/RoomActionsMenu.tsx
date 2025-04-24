import {useCreateRoom} from "@/features/rooms/hooks/useCreateRoom.tsx";
import CreateRoomButton from "@/features/rooms/components/CreateRoom/CreateRoomButton.tsx";
import NavigateRoomButton from "@/features/rooms/components/CreateRoom/NavigateRoomButton.tsx";

export default function RoomActionsMenu() {
    const {roomCode} = useCreateRoom();

    return (
        <>
            {roomCode ?
                <div className={'flex flex-col gap-2'}>
                    <span className='font-semibold text-sm'>Your room has been created. Here's your room code:</span>
                    <span className='text-xl font-bold'>{roomCode}</span>
                    <span className='text-sm'>Share this code with your friends to invite them to join your room.</span>
                    <NavigateRoomButton />
                </div> :
                <CreateRoomButton />
            }

        </>
    );
}