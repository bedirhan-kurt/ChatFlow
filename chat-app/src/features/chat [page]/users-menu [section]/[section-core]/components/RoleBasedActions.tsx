
import { useEffect, useState } from "react";
import {useUser} from "@/features/chat [page]/[page-core]/hooks [core]/useUser.tsx";
import {useRoom} from "@/features/chat [page]/[page-core]/hooks [core]/useRoom.tsx";
import checkRoomCreator from "@/features/chat [page]/users-menu [section]/[section-core]/api/checkRoomCreator.ts";
import DeleteRoomAlertDialog
    from "@/features/chat [page]/users-menu [section]/delete-room [feat]/components/DeleteRoomAlertDialog.tsx";
import LeaveRoomButton
    from "@/features/chat [page]/users-menu [section]/leave-room [feat]/components/LeaveRoomButton.tsx";

export default function RoleBasedActions() {
    const { user } = useUser();
    const { roomCode } = useRoom();

    const [isCreator, setIsCreator] = useState(false);

    useEffect(() => {
        const fetchIsCreator = async () => {
            const result = await checkRoomCreator(roomCode, user.uid);
            setIsCreator(result);
        };
        fetchIsCreator();
    }, [roomCode, user.uid]);

    return (
        <div className="flex flex-col gap-2">
            {isCreator ? <DeleteRoomAlertDialog /> : null}
            <LeaveRoomButton />
        </div>
    );
}