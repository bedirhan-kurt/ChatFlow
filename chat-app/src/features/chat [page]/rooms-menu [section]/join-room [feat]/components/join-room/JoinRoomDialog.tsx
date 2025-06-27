import {useParams} from "react-router";
import Dialog from "@/shared/components/Dialog.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {DoorClosed} from "lucide-react";
import {
    JoinRoomDialogContent
} from "@/features/chat [page]/rooms-menu [section]/join-room [feat]/components/join-room/JoinRoomDialogContent.tsx";
import { useJoinRoom } from "../../hooks/useJoinRoom";
import {DialogClose} from "@/shared/components/ui/dialog.tsx";

export default function JoinRoomDialog({className}: {className?: string}) {
    const {userId} = useParams();
    const {error, handleCodeChange, handleJoinRoom} = useJoinRoom();

    if (!userId) {
        return;
    }

    return (
        <Dialog
            trigger={
                <Button variant="outline" className={`flex items-center justify-center gap-2 ${className}`}>
                    <span>Join Room</span>
                    <DoorClosed></DoorClosed>
                </Button>
            }
            title="Join a room"
            description="Enter the room code to join directly or request access."
            content={<JoinRoomDialogContent handleCodeChange={handleCodeChange} error={error} />}
            actionButton={
                <DialogClose asChild>
                    <Button variant="default" onClick={handleJoinRoom}>
                        Continue
                    </Button>
                </DialogClose>
            }
        />
    );
};