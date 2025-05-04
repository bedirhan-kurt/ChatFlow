import UserProfileCard from "@/features/room-members/components/side-menu/UserProfileCard.tsx";
import {useFetchMembers} from "@/features/room-members/hooks/useFetchMembers.ts";

export default function SideMenu() {
    const {members} = useFetchMembers();

    const userProfileCards = members.map((member) => (
        <UserProfileCard key={member.uid} username={member.username} isOnline={member.isOnline} lastMessage={member.lastMessage} />
    ));

    return (
        <div className="w-1/3 h-full flex flex-col gap-2 items-start">
            <span className="font-semibold">Room Members</span>
            {userProfileCards}
        </div>
    );
};