import {Separator} from "@/shared/components/ui/separator.tsx";
import RoomCard from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/components/RoomCard.tsx";
import {Room} from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/lib/types.ts";

export default function JoinedRoomsList({rooms}: {rooms: Room[]}) {
    return (
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
        </div>
    )
}