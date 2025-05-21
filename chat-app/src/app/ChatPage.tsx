/**
 * ChatPage Component
 *
 * Responsibility:
 * Responsible for rendering the main chat-area page of the application.
 * This component provides a chat-area interface with a message board, a form for sending new chat-area,
 * and user settings options. It is structured using a `Card` layout and leverages various child components.
 *
 * Features:
 * - Displays a public chat-area room where dark-mode can communicate.
 * - Includes user action buttons for signing out, accessing settings, and toggling the theme.
 * - Provides a message board to display chat-area chat-area.
 * - Includes a form for sending new chat-area.
 *
 * Dependencies:
 * - `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle` from the UI components for layout.
 * - `Separator` for visual separation between sections.
 * - `ModeToggle` for theme toggling functionality.
 * - `Scroller` for managing scroll behavior.
 * - `UserSettingsDialog` for user settings management.
 * - `SignOutButton` for signing out functionality.
 * - `MessageBoard` for displaying chat-area chat-area.
 * - `NewMessageForm` for sending new chat-area.
 * - `MessageContextProvider` for providing message-related context to child components.
 *
 * @component
 * @returns {TSX.Element} The rendered ChatPage component.
 */

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/shared/components/ui/card.tsx";
import {Separator} from "@/shared/components/ui/separator.tsx";
import {ModeToggle} from "@/features/chat-page/header-menu/components/dark-mode/mode-toggle.tsx";
import Scroller from "@/features/chat-page/chat-area/components/new-message-form/Scroller.tsx";
import UserSettingsDialog from "@/features/chat-page/header-menu/components/user-settings-dialog/UserSettingsDialog.tsx";
import SignOutButton from "@/features/auth-page/auth/components/SignOutButton.tsx";
import MessageBoard from "@/features/chat-page/chat-area/components/board-content/MessageBoard.tsx";
import NewMessageForm from "@/features/chat-page/chat-area/components/new-message-form/NewMessageForm.tsx";
import UsersAndActionsMenu from "@/features/chat-page/users-and-actions-menu/components/UsersAndActionsMenu.tsx";
import {UserProvider} from "@/features/chat-page/header-menu/hooks/useUser.tsx";
import BetaTag from "@/shared/components/BetaTag.tsx";

export default function ChatPage() {
    return (
        <UserProvider>
            <Card className="w-256 h-full flex flex-col p-8 justify-between">
                <CardHeader className="p-0 flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <CardTitle className="text-xl">
                                Chat App
                            </CardTitle>
                            <BetaTag></BetaTag>
                        </div>
                        <CardDescription>
                            Here is a public chat room. You can chat with other users.
                        </CardDescription>
                    </div>
                    <div className='flex gap-4'>
                        <SignOutButton/>
                        <UserSettingsDialog/>
                        <ModeToggle/>
                    </div>
                </CardHeader>
                <Separator/>
                <div className="h-full w-full flex gap-4 overflow-y-auto">
                    <UsersAndActionsMenu className="w-1/3 py-2 h-full flex flex-col gap-2 justify-between"></UsersAndActionsMenu>
                    <Separator orientation="vertical"></Separator>
                    <CardContent className="">
                        <MessageBoard/>
                        <Scroller></Scroller>
                        <NewMessageForm/>
                    </CardContent>
                </div>
            </Card>
        </UserProvider>
    );
}