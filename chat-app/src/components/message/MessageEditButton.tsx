import {Pencil} from "lucide-react";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";
// import deleteMessage from "@/api/deleteMessage.ts";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {useRef} from "react";
import {Card} from "@/components/ui/card.tsx";
import Message from "@/components/message/Message.tsx";

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

export default function MessageEditButton({id, message}: { id: string, message: string }) {
    const newMessageRef = useRef<HTMLInputElement>(null);

    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-full size-4 flex gap-2 items-center">
                <Pencil className="size-3" />
                <span>Edit</span>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogTitle className='mb-2'>
                    Edit Message
                </AlertDialogTitle>
                <AlertDialogDescription className='flex flex-col gap-6'>
                    <div>
                        <Card className='flex items-center justify-center'>
                            <Message></Message>
                        </Card>
                    </div>

                    <div>
                        <Label htmlFor='old-message' className="text-black mb-2">
                            New Message
                        </Label>
                        <Input
                            id='new-message'
                            value={message}
                            ref={newMessageRef}
                            onChange={(e) => {
                                if (newMessageRef.current) {
                                    newMessageRef.current.value = e.target.value;
                                }
                            }}
                        />
                    </div>
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => console.log(id, newMessageRef.current?.value)}>Save</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}