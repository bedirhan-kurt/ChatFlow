import {useParams} from "react-router";
import Dialog from "@/shared/components/Dialog.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {DoorClosed} from "lucide-react";
import {useJoinRoom} from "@/features/chat-page/rooms-menu/hooks/useJoinRoom.ts";
import {JoinRoomDialogContent} from "@/features/chat-page/rooms-menu/components/join-room/JoinRoomDialogContent.tsx";

export default function JoinRoomDialog() {
    const {userId} = useParams();
    const {error, handleCodeChange, handleJoinRoom} = useJoinRoom();

    if (!userId) {
        return;
    }

    return (
        <Dialog
            trigger={
                <Button variant="outline" className="flex items-center justify-center gap-2">
                    <span>Send Request</span>
                    <DoorClosed></DoorClosed>
                </Button>
            }
            title="Send request to join a room"
            description="Enter the room code to send a request to join the room."
            content={<JoinRoomDialogContent handleCodeChange={handleCodeChange} error={error} />}
            actionButton={
            <Button variant="default" onClick={handleJoinRoom}>
                Send Request
            </Button>}
        />
    );
};