import {
    AlertDialog,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel,
    AlertDialogHeader, AlertDialogTitle,
    AlertDialogTrigger
} from "@/shared/components/ui/alert-dialog.tsx";
import {useNavigate, useParams} from "react-router";
import DeleteRoomButton from "@/features/chat-side-menu/components/side-menu/delete-room/DeleteRoomButton.tsx";
import {AlertDialogAction} from "@radix-ui/react-alert-dialog";
import {useUser} from "@/features/users/hooks/useUser.tsx";
import checkRoomCreator from "@/features/chat-side-menu/api/checkRoomCreator.ts";
import { useState, useEffect } from "react";
import deleteRoom from "@/features/rooms/api/deleteRoom.ts";

export default function DeleteRoomModal() {
    const {user} = useUser();
    const {roomCode} = useParams();
    const navigate = useNavigate();

    if (!roomCode) {
        return null;
    }

    const [isCreator, setIsCreator] = useState(false);

    useEffect(() => {
        if (user.uid) {
            checkRoomCreator(roomCode, user.uid).then((result) => {
                setIsCreator(result);
            });
        }
    }, [roomCode, user.uid]);

    if (!isCreator) {
        return null;
    }

    function handleDeleteRoom() {
        if (roomCode) {
            deleteRoom(roomCode)
            navigate("/rooms")
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-10"><DeleteRoomButton asChild={true}></DeleteRoomButton></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete the room</AlertDialogTitle>
                    <AlertDialogDescription className="flex flex-col gap-4">
                        <span>You won't be able to undo delete. All messages and content will be deleted. Are you sure to delete the room?</span>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteRoom}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};