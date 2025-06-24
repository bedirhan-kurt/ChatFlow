import {SquareArrowLeft} from "lucide-react";
import {Button} from "@/shared/components/ui/button.tsx";
import {useNavigate, useParams} from "react-router";
import {useUser} from "@/features/chat [page]/[page-core]/hooks [core]/useUser.tsx";
import leaveRoom from "@/features/chat [page]/users-menu [section]/leave-room [feat]/api/leaveRoom.ts";
import AlertDialog from "@/shared/components/AlertDialog.tsx";

export default function LeaveRoomButton() {
    const navigate = useNavigate();
    const {roomCode} = useParams();
    const {user} = useUser()

    function handleLeaveRoom() {
        if (!roomCode || !user.uid) {
            console.error("Room ID or user is not defined");
            return;
        }

        leaveRoom(roomCode, user.uid)

        navigate("/rooms")
    }

    return (
        <AlertDialog
            trigger={
                <Button variant="outline" className="hover:cursor-pointer">
                    <SquareArrowLeft></SquareArrowLeft>
                    <span>Leave</span>
                </Button>
            }
            title="Are you sure you want to leave this room?"
            description="You will no longer be able to access its content."
            content={null}
            cancelText="Cancel"
            actionText="Leave"
            action={handleLeaveRoom}
        />
    );
};