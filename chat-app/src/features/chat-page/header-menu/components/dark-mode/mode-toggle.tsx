import { Moon, Sun } from "lucide-react"

import { Button } from "@/shared/components/ui/button.tsx"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu.tsx"
import { useTheme } from "@/features/chat-page/header-menu/components/dark-mode/theme-provider.tsx"

/**
 * ModeToggle Component
 *
 * Responsibility:
 * Provides a dropdown menu for toggling between light, dark, and system themes.
 * This component allows dark-mode to change the application's theme dynamically.
 *
 * Features:
 * - Displays a button with icons representing the current theme.
 * - Offers a dropdown menu with three theme options: Light, Dark, and System.
 * - Updates the theme using the `setTheme` function from the `useTheme` hook.
 *
 * Dependencies:
 * - `useTheme` hook for managing and updating the theme.
 * - `Button` component for rendering the toggle button.
 * - `DropdownMenu` components for creating the dropdown menu.
 * - `Moon` and `Sun` icons from `lucide-react` for visual representation of themes.
 *
 * @component
 * @returns {JSX.Element} The rendered ModeToggle component.
 */

export function ModeToggle() {
    // Destructure the `setTheme` function from the `useTheme` hook
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            {/* Dropdown menu trigger button */}
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    {/* Sun icon for light mode */}
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    {/* Moon icon for dark mode */}
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            {/* Dropdown menu content with theme options */}
            <DropdownMenuContent align="end">
                {/* Light theme option */}
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                {/* Dark theme option */}
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                {/* System theme option */}
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}