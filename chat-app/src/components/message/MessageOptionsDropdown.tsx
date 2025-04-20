import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx"
import {EllipsisVertical} from "lucide-react";
import React from "react";

/**
 * MessageOptionsDropdown Component
 *
 * Responsibility:
 * This component renders a dropdown menu for message options, allowing users to
 * perform actions such as editing or deleting a message.
 *
 * Features:
 * - Displays a dropdown menu trigger icon.
 * - Provides options for editing and deleting a message.
 * - Integrates with `MessageDeleteButton` and `MessageEditButton` components for respective actions.
 *
 * Props:
 * - `id` (string): The unique identifier of the message for which the options are displayed.
 *
 * Dependencies:
 * - `DropdownMenu` and its subcomponents for rendering the dropdown menu.
 * - `MessageDeleteButton` for handling message deletion.
 * - `MessageEditButton` for handling message editing.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {string} props.id - The unique identifier of the message.
 * @returns {TSX.Element} The rendered MessageOptionsDropdown component.
 */

export function MessageOptionsDropdown({ children }: { children: React.ReactNode }) {
    const dropdownMenuItems = React.Children.toArray(children).map((child, index) => {
        return (
            <DropdownMenuItem key={index} onSelect={(e) => e.preventDefault()}>
                {child}
            </DropdownMenuItem>
        );
    });

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center" asChild>
                <EllipsisVertical className="size-4"></EllipsisVertical>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup title="Message Options">
                    {dropdownMenuItems}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}