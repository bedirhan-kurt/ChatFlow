import {useNavigate, useParams} from "react-router";
import deleteRoom from "@/features/rooms/api/deleteRoom.ts";
import AlertDialog from "@/shared/components/AlertDialog.tsx";
import {Button} from "@/shared/components/ui/button.tsx";

export default function DeleteRoomAlertDialog() {
    const {roomCode} = useParams();
    const navigate = useNavigate();

    function handleDeleteRoom() {
        if (roomCode) {
            deleteRoom(roomCode)
            navigate("/rooms")
        } else {
            console.error("Room code is undefined");
        }
    }

    return (
        <AlertDialog
            trigger={
                <Button>Delete</Button>
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