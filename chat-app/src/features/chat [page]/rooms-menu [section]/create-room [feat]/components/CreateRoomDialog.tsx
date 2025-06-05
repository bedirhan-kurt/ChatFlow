import {useParams} from "react-router";
import Dialog from "@/shared/components/Dialog.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {Plus} from "lucide-react";
import CreateRoomDialogContent
    from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/components/CreateRoomDialogContent.tsx";

export default function CreateRoomDialog({className}: { className?: string }) {
    const {userId} = useParams();

    if (!userId) return null;

    return (
        <Dialog
            trigger={
                <Button className={`flex items-center gap-2 ${className}`}>
                    <span>Create Room</span>
                    <Plus size={18}/>
                </Button>
            }
            title="Create a room"
            description="Start a new chat room with your friends."
            content={<CreateRoomDialogContent />}
            actionButton={false}
            closeButton={false}
        />
    );
}
