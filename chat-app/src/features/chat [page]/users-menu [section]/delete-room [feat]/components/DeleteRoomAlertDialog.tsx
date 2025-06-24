import AlertDialog from "@/shared/components/AlertDialog.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {Trash} from "lucide-react";
import {useRoom} from "@/features/chat [page]/[page-core]/hooks [core]/useRoom.tsx";
import deleteRoom from "@/features/chat [page]/users-menu [section]/delete-room [feat]/api/deleteRoom.ts";

export default function DeleteRoomAlertDialog() {
    const {roomCode} = useRoom();

    function handleDeleteRoom() {
        if (roomCode) {
            deleteRoom(roomCode)
            console.error("Room code is undefined");
        }
    }

    return (
        <AlertDialog
            trigger={
                <Button variant="outline" className="hover:cursor-pointer">
                    <Trash></Trash>
                    <span>Delete</span>
                </Button>
            }
            title="Are you sure you want to delete this room?"
            description="All content in the room will be deleted."
            content={null}
            cancelText="Cancel"
            actionText="Delete"
            action={handleDeleteRoom}
        />
    );
};