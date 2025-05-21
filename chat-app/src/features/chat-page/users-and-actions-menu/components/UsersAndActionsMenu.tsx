import UserProfileCard from "@/features/chat-page/users-and-actions-menu/components/actions/UserProfileCard.tsx";
import {useFetchMembersMetadata} from "@/features/chat-page/users-and-actions-menu/hooks/useFetchMembersMetadata.ts";
import RoleBasedActions from "@/features/chat-page/users-and-actions-menu/components/actions/RoleBasedActions.tsx";
import {useFetchLastMessages} from "@/features/chat-page/users-and-actions-menu/hooks/useFetchLastMessages.ts";
import InviteDialog from "@/features/chat-page/header-menu/components/InviteDialog.tsx";
import {Separator} from "@/shared/components/ui/separator.tsx";

export default function UsersAndActionsMenu({className}: { className?: string }) {
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


    return (
        <div className={className}>
            <div className="w-full flex flex-col gap-2">
                <span className="text-sm text-gray-500">Users</span>
                {userProfileCards}
                <Separator orientation="horizontal" className="w-full"></Separator>
                <InviteDialog />
            </div>
            <div className="w-full flex flex-col gap-2">
                <span className="text-sm text-gray-500">Actions</span>
                <RoleBasedActions/>
            </div>
        </div>
    );
};