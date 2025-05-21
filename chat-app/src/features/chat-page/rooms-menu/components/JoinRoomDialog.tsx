import {useParams} from "react-router";
import Dialog from "@/shared/components/Dialog.tsx";
import {Input} from "@/shared/components/ui/input.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {Label} from "@/shared/components/ui/label.tsx";
import {Plus} from "lucide-react";

export default function JoinRoomDialog() {
    const {roomCode} = useParams();

    if (!roomCode) {
        return;
    }

    return (
        <Dialog
            trigger={
                <Button variant="ghost" className="flex items-center justify-center gap-2">
                    <span>Join Room</span>
                    <Plus></Plus>
                </Button>
            }
            title="Invite others to this room"
            description="Copy the room code below and seqwend it to your friends."
            content={<JoinRoomDialogContent roomCode={roomCode}/>}
            closeButton={false}
        />
    );
};

function JoinRoomDialogContent({roomCode}: { roomCode: string }) {
    return (
        <div className="w-full flex gap-2">
            <div className="w-full flex gap-2">
                <Label htmlFor="link" className="sr-only">
                    Link
                </Label>
                <Input
                    id="link"
                    defaultValue={roomCode}
                    readOnly
                />
            </div>
            <Button onClick={() => {
                navigator.clipboard.writeText(`You are invited to a ChatFlow room with room code ${roomCode}.`)
            }}>
                Copy
            </Button>
        </div>
    );
}