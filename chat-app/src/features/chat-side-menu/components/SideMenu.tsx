import UserProfileCard from "@/features/chat-side-menu/components/side-menu/UserProfileCard.tsx";
import {useFetchMembers} from "@/features/chat-side-menu/hooks/useFetchMembers.ts";
import RoleBasedActions from "./side-menu/RoleBasedActions.tsx";

export default function SideMenu({className}: { className?: string }) {
    const {members} = useFetchMembers();

    const userProfileCards = members.map((member) => (
        <UserProfileCard key={member.uid} username={member.username} isOnline={member.isOnline} lastMessage={member.lastMessage} />
    ));

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