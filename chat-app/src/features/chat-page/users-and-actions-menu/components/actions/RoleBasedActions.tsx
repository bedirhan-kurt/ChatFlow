import { useUser } from "@/features/chat-page/header-menu/hooks/useUser.tsx";
import { useEffect, useState } from "react";
import checkRoomCreator from "@/features/chat-page/users-and-actions-menu/api/checkRoomCreator.ts";
import { useParams } from "react-router";
import DeleteRoomAlertDialog
    from "@/features/chat-page/users-and-actions-menu/components/actions/delete-room/DeleteRoomAlertDialog.tsx";
import LeaveRoomButton from "@/features/chat-page/users-and-actions-menu/components/actions/leave-room/LeaveRoomButton.tsx";
import RoomOptionsDialog from "@/features/chat-page/users-and-actions-menu/components/actions/room-options/DeleteRoomAlertDialog.tsx";

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
                <div className="w-full flex flex-col gap-2">
                    <RoomOptionsDialog />
                    <DeleteRoomAlertDialog />
                </div>
            ) : (
                <LeaveRoomButton />
            )}
        </>
    );
}