import {Separator} from "@/shared/components/ui/separator.tsx";
import RoomsMenuStatus from "@/features/chat-page/rooms-menu/components/RoomsMenuStatus.tsx";
import JoinRoomDialog from "@/features/chat-page/rooms-menu/components/JoinRoomDialog.tsx";
import {useFetchJoinedRooms} from "@/features/chat-page/rooms-menu/hooks/useFetchJoinedRooms.ts";
import {useParams} from "react-router";

export default function RoomsMenu({className}: { className?: string }) {
    {/*
        const {members} = useFetchMembersMetadata();
        const {lastMessages} = useFetchLastMessages();

        const userProfileCards = members.map((member) => {
            const userLastMessage = lastMessages[member.uid];

            return (
                <UserProfileCard
                    key={member.uid}
                    username={member.username}
                    isOnline={member.isOnline}
                    lastMessage={userLastMessage?.content || "No chat-area yet"}
                    lastMessageDate={userLastMessage?.createdAt || ""}
                />
            );
        });
    */}
    const {userId} = useParams();
    const {isLoading, error, rooms} = useFetchJoinedRooms(userId || "");

    return (
        <div className={className}>
            <div className="w-full flex flex-col gap-2">
                <span className="text-sm text-gray-500">Rooms</span>
                {/*userProfileCards*/}
                <Separator orientation="horizontal" className="w-full"></Separator>
            </div>
            <div className="w-64 h-full flex flex-col items-center justify-center gap-2">
                <RoomsMenuStatus isLoading={isLoading} error={error}  rooms={rooms} />
                <Separator orientation="horizontal"></Separator>
                <JoinRoomDialog />
            </div>
        </div>
    );
};