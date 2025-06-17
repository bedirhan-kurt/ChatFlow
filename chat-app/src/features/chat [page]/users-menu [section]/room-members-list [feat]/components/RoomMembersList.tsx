import {
    useFetchMembersMetadata
} from "@/features/chat [page]/users-menu [section]/room-members-list [feat]/hooks/useFetchMembersMetadata.ts";
import {
    useFetchLastMessages
} from "@/features/chat [page]/users-menu [section]/room-members-list [feat]/hooks/useFetchLastMessages.ts";
import UserProfileCard
    from "@/features/chat [page]/users-menu [section]/[section-core]/components/actions/UserProfileCard.tsx";

export default function RoomMembersList() {
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
        <div>
            {members.length > 0 ? userProfileCards : <h1>No Room Selected.</h1>}
        </div>
    );
}