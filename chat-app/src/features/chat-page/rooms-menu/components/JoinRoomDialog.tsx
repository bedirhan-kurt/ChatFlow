import {useParams} from "react-router";
import Dialog from "@/shared/components/Dialog.tsx";
import {Input} from "@/shared/components/ui/input.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {Label} from "@/shared/components/ui/label.tsx";
import {Plus} from "lucide-react";
import {DialogClose} from "@/shared/components/ui/dialog.tsx";
import {useJoinRoom} from "@/features/chat-page/rooms-menu/hooks/useJoinRoom.ts";

export default function JoinRoomDialog() {
    const {userId} = useParams();
    const {roomCode, setRoomCode, handleInputChange, handleJoinRoom} = useJoinRoom();

    if (!userId) {
        return;
    }

    return (
        <Dialog
            trigger={
                <Button variant="ghost" className="flex items-center justify-center gap-2">
                    <span>Send Request</span>
                    <Plus></Plus>
                </Button>
            }
            title="Send request to join a room"
            description="Enter the room code to send a request to join the room."
            content={<JoinRoomDialogContent/>}
            actionButton={
                <DialogClose asChild>
                    <Button type="submit" variant="default" onClick={handleJoinRoom}>
                        Send Request
                    </Button>
                </DialogClose>}
        />
    );
};

function JoinRoomDialogContent() {
    return (
        <div className="w-full flex gap-2">
            <Label htmlFor="roomCode" className="sr-only">
                Room Code
            </Label>
            <Input
                id="roomCode"
                placeholder={"Room Code"}
                onChange={handleInputChange}
            />
        </div>
    );
}