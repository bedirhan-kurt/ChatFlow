import { Pencil } from "lucide-react";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/shared/components/ui/alert-dialog.tsx";
import { useState } from "react";
import {editMessage} from "@/features/chat/api/editMessage.ts";
import {Separator} from "@/shared/components/ui/separator.tsx";
import EditMessageForm from "@/features/chat/components/message/message-options/EditMessageForm.tsx";

export default function MessageEditButton({ roomCode, id, message, createdAt }: { roomCode: string, id: string, message: string, createdAt: string }) {
    const [newMessage, setNewMessage] = useState<string>(message || "");


    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-full size-4 flex gap-2 items-center">
                <Pencil className="size-3" />
                <span>Edit</span>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Edit Message
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        You can preview the current message and write a new one below.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <Separator />

                <EditMessageForm
                    message={message}
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    createdAt={createdAt}
                />

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => editMessage(roomCode, id, newMessage)}>
                        Save
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
