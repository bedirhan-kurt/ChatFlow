import { Button } from "@/components/ui/button"
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
        <DropdownMenuItem asChild>{child}</DropdownMenuItem>
    )); // Copilot

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center" asChild>
                <Button variant="ghost" className="size-4"><EllipsisVertical className="size-4"></EllipsisVertical></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup title="Message Options">
                    {dropdownItems}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
