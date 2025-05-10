import { useUser } from "@/features/users/hooks/useUser.tsx";
import { useEffect, useState } from "react";
import checkRoomCreator from "@/features/chat-side-menu/api/checkRoomCreator.ts";
import { useParams } from "react-router";
import DeleteRoomAlertDialog
    from "@/features/chat-side-menu/components/side-menu/delete-room/DeleteRoomAlertDialog.tsx";
import InviteDialog from "@/features/chat-side-menu/components/side-menu/invite/InviteDialog.tsx";
import LeaveRoomButton from "@/features/chat-side-menu/components/side-menu/leave-room/LeaveRoomButton.tsx";

export default function RoleBasedActions() {
    const { user } = useUser();
    const { roomCode } = useParams();

    const [isCreator, setIsCreator] = useState<boolean | null>(null);

    useEffect(() => {
        if (user.uid && roomCode) {
            checkRoomCreator(roomCode, user.uid).then(setIsCreator);
        } else {
            console.error("User ID or room code is undefined");
        }
    }, [roomCode, user.uid]);

    if (isCreator === null) return null;

    return (
        <>
            {isCreator ? (
                <>
                    <DeleteRoomAlertDialog />
                    <InviteDialog />
                </>
            ) : (
                <LeaveRoomButton />
            )}
        </>
    );
}