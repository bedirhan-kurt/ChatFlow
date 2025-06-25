import {Separator} from "@/shared/components/ui/separator.tsx";
import {useUser} from "@/features/chat [page]/[page-core]/hooks [core]/useUser.tsx";
import RoomsMenuStatus
    from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/components/RoomsMenuStatus.tsx";
import {
    useJoinedRooms
} from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/hooks/useJoinedRooms.ts";
import CreateRoomDialog
    from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/components/CreateRoomDialog.tsx";
import JoinRoomDialog
    from "@/features/chat [page]/rooms-menu [section]/join-room [feat]/components/join-room/JoinRoomDialog.tsx";
import JoinedRoomsList
    from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/components/JoinedRoomsList.tsx";

export default function RoomsMenu({className}: { className?: string }) {
    const {user} = useUser();
    const {isLoading, error, rooms, isRoomsEmpty} = useJoinedRooms(user.uid || "");

    const showActions = !isLoading && !error;
    const showJoinedRoomsList = !isRoomsEmpty && !isLoading && !error;

    return (
        <div className={`${className} flex flex-col h-full overflow-hidden`}>
            {/* Header - Always visible */}
            <RoomsMenuStatus isLoading={isLoading} error={error} rooms={rooms}/>

            {/* Room list with actions at bottom */}
            {showJoinedRoomsList ? (
                <JoinedRoomsList rooms={rooms}/>
            ) : null
            }

            {/* Empty state with actions */}
            {showActions && (
                <div className="w-full mt-4 flex flex-col items-center gap-2 flex-shrink-0">
                    {!isRoomsEmpty ? <Separator orientation="horizontal"/> : null}
                    <CreateRoomDialog className={`${isRoomsEmpty ? 'w-64' : 'w-full'}`} />
                    <JoinRoomDialog className={`${isRoomsEmpty ? 'w-64' : 'w-full'}`} />
                </div>
            )}

        </div>
    );
}
