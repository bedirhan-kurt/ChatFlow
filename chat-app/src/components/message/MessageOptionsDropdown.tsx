import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx"
import {EllipsisVertical} from "lucide-react";
import MessageDeleteButton from "@/components/message/MessageDeleteButton.tsx";
import MessageEditButton from "@/components/message/MessageEditButton.tsx";

// Responsible for rendering the dropdown menu for message options

export function MessageOptionsDropdown({ id }: { id: string }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center" asChild>
                <EllipsisVertical className="size-4"></EllipsisVertical>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup title="Message Options">
                    <DropdownMenuItem>
                        <MessageDeleteButton id={id}/>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <MessageEditButton id={id}/>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
