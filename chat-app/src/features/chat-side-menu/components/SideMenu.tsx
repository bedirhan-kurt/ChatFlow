import UserProfileCard from "@/features/chat-side-menu/components/side-menu/UserProfileCard.tsx";
import {useFetchMembers} from "@/features/chat-side-menu/hooks/useFetchMembers.ts";
import InviteModal from "@/features/chat-side-menu/components/side-menu/invite/InviteModal.tsx";
import DeleteRoomModal from "./side-menu/delete-room/DeleteRoomModal";
import LeaveRoomButton from "@/features/chat-side-menu/components/side-menu/leave-room/LeaveRoomButton.tsx";

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
                <LeaveRoomButton></LeaveRoomButton>
                <InviteModal></InviteModal>
                <DeleteRoomModal></DeleteRoomModal>
            </div>
        </div>
    );
};