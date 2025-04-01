import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {EllipsisVertical, Trash2} from "lucide-react";
import React from "react";
import MessageDeleteButton from "@/components/MessageDeleteButton.tsx";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";
import deleteMessage from "@/api/deleteMessage.ts";

export function MessageOptionsDropdown({ children }: { children: React.ReactNode }) {
    const dropdownItems = React.Children.map(children, (child) => (
        <DropdownMenuItem>{child}</DropdownMenuItem>
    )); // Copilot

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
                <EllipsisVertical className="size-4"></EllipsisVertical>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                <AlertDialog>
                    <AlertDialogTrigger className="w-full size-4 flex gap-2 items-center">
                        <div className="flex items-center justify-center gap-2">
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
                    </DropdownMenuItem>
                    {dropdownItems}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
