import {
    useFetchMembersMetadata
} from "@/features/chat [page]/users-menu [section]/room-members-list [feat]/hooks/useFetchMembersMetadata.ts";
import {
    useFetchLastMessages
} from "@/features/chat [page]/users-menu [section]/room-members-list [feat]/hooks/useFetchLastMessages.ts";
import UserProfileCard from "../../[section-core]/components/UserProfileCard";
import {useRoom} from "@/features/chat [page]/[page-core]/hooks [core]/useRoom.tsx";

export default function RoomMembersList() {
    const { roomCode } = useRoom();
    const { members, loading, error } = useFetchMembersMetadata();
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

    const renderContent = () => {
        if (roomCode === "No Room") {
            return <h1>No Room Selected.</h1>;
        }

        if (loading) {
            return <h1>Loading members...</h1>;
        }

        if (error) {
            return <h1>Error loading members: {error.message}</h1>;
        }

        if (members.length === 0) {
            return <h1>No Members in this Room.</h1>;
        }

        return userProfileCards;
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
}
