import {AlertDialogCancel} from "@/shared/components/ui/alert-dialog.tsx";

export default function CopyCodeButton({roomCode}: { roomCode: string }) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText('You are invited to a ChatFlow room with room code ' + roomCode).then(() => {
            console.log("Room code copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy room code: ", err);
        });
    };

    return (
        <AlertDialogCancel onClick={copyToClipboard}
                           className="bg-black text-white dark:bg-white dark:text-black hover:bg-secondary-foreground hover:text-white dark:hover:bg-gray-200 dark:hover:text-black">
            Copy Room Code
        </AlertDialogCancel>
    );
};