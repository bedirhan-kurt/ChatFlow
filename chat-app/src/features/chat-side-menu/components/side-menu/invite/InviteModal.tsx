import {
    AlertDialog,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel,
    AlertDialogHeader, AlertDialogTitle,
    AlertDialogTrigger
} from "@/shared/components/ui/alert-dialog.tsx";
import InviteButton from "@/features/chat-side-menu/components/side-menu/invite/InviteButton.tsx";
import CopyCodeButton from "@/features/chat-side-menu/components/side-menu/invite/CopyCodeButton.tsx";
import {useParams} from "react-router";

export default function InviteModal() {
    const {roomCode} = useParams();

    if (!roomCode) {
        return;
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-full"><InviteButton asChild={true}></InviteButton></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Invite others to this room</AlertDialogTitle>
                    <AlertDialogDescription className="flex flex-col gap-4">
                        <span>Copy the room code below and send it to your friends.</span>
                        <span className="w-full text-center my-2 text-4xl text-black font-semibold tracking-wider dark:text-white">{roomCode}</span>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                    <CopyCodeButton roomCode={roomCode}></CopyCodeButton>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
