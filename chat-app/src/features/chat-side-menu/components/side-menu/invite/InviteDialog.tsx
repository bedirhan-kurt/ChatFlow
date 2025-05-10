import {useParams} from "react-router";
import Dialog from "@/shared/components/Dialog.tsx";
import {Input} from "@/shared/components/ui/input.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {Label} from "@/shared/components/ui/label.tsx";

export default function InviteDialog() {
    const {roomCode} = useParams();

    if (!roomCode) {
        return;
    }

    return (
        <Dialog
            trigger={
                <Button variant={"outline"}>Invite</Button>
            }
            title="Invite others to this room"
            description="Copy the room code below and seqwend it to your friends."
            content={<InviteDialogContent/>}
            closeButton={false}
        />
    );
};

function InviteDialogContent() {
    return (
        <div className="w-full flex gap-2">
            <div className="w-full flex gap-2">
                <Label htmlFor="link" className="sr-only">
                    Link
                </Label>
                <Input
                    id="link"
                    defaultValue={""}
                    readOnly
                />
            </div>
            <Button onClick={() => {
                navigator.clipboard.writeText(`You are invited to a ChatFlow room with room code ${""}.`)
            }}>
                Copy
            </Button>
        </div>
    );
}