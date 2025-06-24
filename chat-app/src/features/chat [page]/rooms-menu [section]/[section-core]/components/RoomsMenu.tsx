import { Separator } from "@/shared/components/ui/separator.tsx";
import { useUser } from "@/features/chat [page]/[page-core]/hooks [core]/useUser.tsx";
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
        <div className={`${className} flex flex-col h-full overflow-hidden`}>
            {/* Header - Always visible */}
            <RoomsMenuStatus isLoading={isLoading} error={error} rooms={rooms} />

            {/* Empty state with actions */}
            {showActions && (
                <div className="w-full mt-4 flex flex-col items-center gap-2 flex-shrink-0">
                    <Separator orientation="horizontal" />
                    <CreateRoomDialog className="w-full" />
                    <JoinRoomDialog className="w-full" />
                </div>
            )}

            {/* Room list with actions at bottom */}
            {rooms.length > 0 && !isLoading && !error && (
                <div className="flex flex-col w-full gap-2 mt-2 flex-grow min-h-0">
                    {/* Room list header */}
                    <div className="flex flex-col gap-2 flex-shrink-0">
                        <span className="text-sm">Rooms</span>
                        <Separator orientation="horizontal" className="w-full" />
                    </div>

                    {/* Scrollable room list */}
                    <div className="flex flex-col gap-2 overflow-y-auto flex-grow min-h-0">
                        {rooms.map((room) => (
                            <RoomCard
                                roomCode={room.roomCode}
                                key={room.roomCode || room.name}
                                roomName={room.name}
                                createdAt={room.createdAt}
                                numberOfMembers={room.members.length}
                            />
                        ))}
                    </div>

                    {/* Footer with actions - Always at bottom */}
                    <div className="w-full flex flex-col gap-2 mt-2 flex-shrink-0">
                        <Separator orientation="horizontal" className="w-full" />
                        <CreateRoomDialog className="w-full" />
                        <JoinRoomDialog className="w-full" />
                    </div>
                </div>
            )}
        </div>
    );
}
