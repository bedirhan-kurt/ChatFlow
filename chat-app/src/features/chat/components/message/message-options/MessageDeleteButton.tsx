import { Trash2 } from "lucide-react";
import deleteMessage from "@/features/chat/api/deleteMessage.ts";
import AlertDialog from "@/shared/components/AlertDialog.tsx";

/**
 * MessageDeleteButton Component
 *
 * Responsibility:
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

export default function MessageDeleteButton({roomCode, id}: { roomCode: string, id: string }) {
    return (
        <AlertDialog
            trigger={
                <div className="w-full size-4 flex gap-2 items-center">
                    <Trash2 className="size-3" />
                    <span>Delete</span>
                </div>
            }
            title="Are you sure you want to delete this message?"
            description="This action cannot be undone."
            content={null}
            cancelText="Cancel"
            actionText="Delete"
            action={() => deleteMessage(roomCode, id)}
        />
    )
}