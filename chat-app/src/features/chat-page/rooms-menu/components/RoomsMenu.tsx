import {Separator} from "@/shared/components/ui/separator.tsx";
import RoomsMenuStatus from "@/features/chat-page/rooms-menu/components/RoomsMenuStatus.tsx";
import JoinRoomDialog from "@/features/chat-page/rooms-menu/components/join-room/JoinRoomDialog.tsx";
import {useJoinedRooms} from "@/features/chat-page/rooms-menu/hooks/useJoinedRooms.ts";
import CreateRoomDialog from "@/features/chat-page/rooms-menu/components/create-room/CreateRoomDialog.tsx";
import {useUser} from "@/features/chat-page/header-menu/hooks/useUser.tsx";
import RoomCard from "@/features/chat-page/rooms-menu/components/RoomCard.tsx";

export default function RoomsMenu({className}: { className?: string }) {
    const {user} = useUser()
    const {isLoading, error, rooms} = useJoinedRooms(user.uid || "");

    const roomCards = rooms.map((room) => (
        <RoomCard
            roomName={room.roomCode}
        />
    ))

    return (
        <div className={className}>
            <div className="w-full flex flex-col gap-2">
                <span className="text-sm text-gray-500">Rooms</span>
                {roomCards}
                <Separator orientation="horizontal" className="w-full"></Separator>
            </div>
            <div className="w-64 h-full flex flex-col items-center justify-center gap-2">
                <RoomsMenuStatus isLoading={isLoading} error={error} rooms={rooms} />
                <Separator orientation="horizontal"></Separator>
                <div className='w-full flex items-center justify-center gap-2'>
                    <CreateRoomDialog />
                    <span><em>or</em></span>
                    <JoinRoomDialog />
                </div>
            </div>
        </div>
    );
};