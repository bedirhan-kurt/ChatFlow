import {Pencil} from "lucide-react";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";

/**
 * MessageEditButton Component
 *
 * Responsibility:
 * This component provides a button to edit a message. It uses an alert dialog
 * to confirm the edit action, ensuring the user is aware of the operation.
 *
 * Features:
 * - Displays an edit button with an icon and label.
 * - Shows a confirmation dialog before proceeding with the edit action.
 *
 * Props:
 * - `id` (string): The unique identifier of the message to be edited.
 *
 * Dependencies:
 * - `AlertDialog` and its subcomponents for rendering the confirmation dialog.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {string} props.id - The unique identifier of the message to edit.
 * @returns {TSX.Element} The rendered MessageEditButton component.
 */

export default function MessageEditButton({id}: { id: string }) {
    console.log(id)
    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-full size-4 flex gap-2 items-center">
                <Pencil className="size-3" />
                <span>Edit</span>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogTitle>
                    Are you sure you want to delete this message?
                </AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone.
                </AlertDialogDescription>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-red-500">Delete</AlertDialogAction>
            </AlertDialogContent>
        </AlertDialog>
    )
}