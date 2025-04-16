import {Pencil} from "lucide-react";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";

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