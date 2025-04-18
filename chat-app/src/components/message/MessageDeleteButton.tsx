import { Trash2 } from "lucide-react";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";
import deleteMessage from "@/api/deleteMessage.ts";

/**
 * MessageDeleteButton Component
 *
 * This component provides a button to delete a message. It uses an alert dialog
 * to confirm the deletion action, ensuring the user is aware that the action
 * cannot be undone.
 *
 * Features:
 * - Displays a delete button with an icon and label.
 * - Shows a confirmation dialog before deleting a message.
 * - Calls the `deleteMessage` API function to delete the message when confirmed.
 *
 * Props:
 * - `id` (string): The unique identifier of the message to be deleted.
 *
 * Dependencies:
 * - `AlertDialog` and its subcomponents for rendering the confirmation dialog.
 * - `deleteMessage` API function for performing the delete operation.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {string} props.id - The unique identifier of the message to delete.
 * @returns {TSX.Element} The rendered MessageDeleteButton component.
 */

export default function MessageDeleteButton({id}: { id: string }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-full size-4 flex gap-2 items-center" asChild>
                <div>
                    <Trash2 className="size-3" />
                    <span>Delete</span>
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure you want to delete this message?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteMessage(id)}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}