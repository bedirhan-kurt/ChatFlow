import UserProfileCard from "@/features/chat-side-menu/components/side-menu/UserProfileCard.tsx";
import {useFetchMembersMetadata} from "@/features/chat-side-menu/hooks/useFetchMembersMetadata.ts";
import RoleBasedActions from "./side-menu/RoleBasedActions.tsx";
import {useFetchLastMessages} from "@/features/chat-side-menu/hooks/useFetchLastMessages.ts";

export default function SideMenu({className}: { className?: string }) {
    const { members } = useFetchMembersMetadata();
    const { lastMessages } = useFetchLastMessages();

    const userProfileCards = members.map((member) => {
        const userLastMessage = lastMessages[member.uid];

        return (
            <UserProfileCard
                key={member.uid}
                username={member.username}
                isOnline={member.isOnline}
                lastMessage={userLastMessage?.content || "No messages yet"}
                lastMessageDate={userLastMessage?.createdAt || ""}
            />
        );
    });


    return (
        <div className={className}>
            <div className="flex flex-col gap-2 items-start">
                <span className="font-semibold">Room Members</span>
                {userProfileCards}
            </div>
            <div className="w-full flex gap-2 items-center justify-between">
                <RoleBasedActions></RoleBasedActions>
            </div>
        </div>
    );
};