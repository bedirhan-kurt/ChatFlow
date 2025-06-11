import { Separator } from "@/shared/components/ui/separator.tsx";
import { useUser } from "@/features/chat [page]/[page-core]/hooks [core]/useUser.tsx";
import { toReadableDate } from "@/shared/lib/utils/toReadableDate.ts";
import RoomsMenuStatus
    from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/components/RoomsMenuStatus.tsx";
import {useJoinedRooms} from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/hooks/useJoinedRooms.ts";
import CreateRoomDialog
    from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/components/CreateRoomDialog.tsx";
import JoinRoomDialog
    from "@/features/chat [page]/rooms-menu [section]/join-room [feat]/components/join-room/JoinRoomDialog.tsx";
import RoomCard from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/components/RoomCard.tsx";

export default function RoomsMenu({ className }: { className?: string }) {
    const { user } = useUser();
    const { isLoading, error, rooms } = useJoinedRooms(user.uid || "");

    const showActions = !isLoading && !error && rooms.length === 0;

    return (
        <div className={className}>
            <RoomsMenuStatus isLoading={isLoading} error={error} rooms={rooms} />

            {showActions && (
                <div className="w-full mt-4 flex flex-col items-center gap-2">
                    <Separator orientation="horizontal" />
                    <CreateRoomDialog className="w-full" />
                    <JoinRoomDialog className="w-full" />
                </div>
            )}

            {rooms.length > 0 && !isLoading && !error && (
                <>
                    <div className="w-full flex flex-col gap-2 mt-2">
                        <span className="text-sm ">Rooms</span>
                        <Separator orientation="horizontal" className="w-full" />
                        {rooms.map((room) => (
                            <RoomCard
                                roomCode={room.roomCode}
                                key={room.roomCode || room.name}
                                roomName={room.name}
                                createdAt={toReadableDate(room.createdAt)}
                                numberOfMembers={room.members.length}
                            />
                        ))}

                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <span className="text-sm text-gray-500">Actions</span>
                        <Separator orientation="horizontal" className="w-full" />
                        <CreateRoomDialog className="w-full" />
                        <JoinRoomDialog className="w-full" />
                    </div>
                </>
            )}
        </div>
    );
}