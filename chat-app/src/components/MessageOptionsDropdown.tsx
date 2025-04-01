import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {EllipsisVertical} from "lucide-react";
import React from "react";

export function MessageOptionsDropdown({ children }: { children: React.ReactNode }) {
    const dropdownItems = React.Children.map(children, (child) => (
        <DropdownMenuItem>{child}</DropdownMenuItem>
    )); // Copilot

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center" asChild>
                <EllipsisVertical className="size-4"></EllipsisVertical>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup title="Message Options">
                    {dropdownItems}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
