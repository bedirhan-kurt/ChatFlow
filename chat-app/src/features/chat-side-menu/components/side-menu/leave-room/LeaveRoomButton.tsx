import {SquareArrowLeft} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/shared/components/ui/tooltip.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {useNavigate, useParams} from "react-router";
import {useUser} from "@/features/users/hooks/useUser.tsx";
import leaveRoom from "@/features/chat-side-menu/api/leaveRoom.ts";

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
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" className="shadow-sm" onClick={handleLeaveRoom}>
                        <SquareArrowLeft></SquareArrowLeft>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Leave room</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};