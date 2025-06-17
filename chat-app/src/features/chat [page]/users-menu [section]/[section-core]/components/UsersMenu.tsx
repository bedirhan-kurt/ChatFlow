import RoleBasedActions from "@/features/chat [page]/users-menu [section]/[section-core]/components/actions/RoleBasedActions.tsx";
import InviteDialog from "@/features/chat [page]/header-menu [section]/[section-core]/components/InviteDialog.tsx";
import {Separator} from "@/shared/components/ui/separator.tsx";
import RoomMembersList
    from "@/features/chat [page]/users-menu [section]/room-members-list [feat]/components/RoomMembersList.tsx";

export default function UsersMenu({className}: { className?: string }) {

    return (
        <div className={className}>
            <div className="w-full flex flex-col gap-2">
                <span className="text-sm text-gray-500">Users</span>
                <Separator orientation="horizontal" className="w-full"></Separator>
                <InviteDialog />
                <RoomMembersList></RoomMembersList>
            </div>
            <div className="w-full flex flex-col gap-2">
                <span className="text-sm text-gray-500">Actions</span>
                <RoleBasedActions/>
            </div>
        </div>
    );
};