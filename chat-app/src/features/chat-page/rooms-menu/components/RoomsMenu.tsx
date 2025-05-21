import RoleBasedActions from "@/features/chat-page/users-and-actions-menu/components/actions/RoleBasedActions.tsx";
import {Separator} from "@/shared/components/ui/separator.tsx";
import RoomsMenuStatus from "@/features/chat-page/rooms-menu/components/RoomsMenuStatus.tsx";
import JoinRoomDialog from "@/features/chat-page/rooms-menu/components/JoinRoomDialog.tsx";

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


    return (
        <div className={className}>
            <div className="w-full flex flex-col gap-2">
                <span className="text-sm text-gray-500">Rooms</span>
                {/*userProfileCards*/}
                <Separator orientation="horizontal" className="w-full"></Separator>
            </div>
            <div className="w-full flex flex-col gap-2">
                <RoomsMenuStatus isLoading={false} rooms={[]} error={null} />
                <Separator orientation="horizontal" className="w-4/5"></Separator>
                <JoinRoomDialog />
            </div>
            <div className="w-full flex flex-col gap-2">
                <span className="text-sm text-gray-500">Actions</span>
                <RoleBasedActions/>
            </div>
        </div>
    );
};