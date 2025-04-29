/**
 * ChatPage Component
 *
 * Responsibility:
 * Responsible for rendering the main chat page of the application.
 * This component provides a chat interface with a message board, a form for sending new messages,
 * and user settings options. It is structured using a `Card` layout and leverages various child components.
 *
 * Features:
 * - Displays a public chat room where users can communicate.
 * - Includes user action buttons for signing out, accessing settings, and toggling the theme.
 * - Provides a message board to display chat messages.
 * - Includes a form for sending new messages.
 *
 * Dependencies:
 * - `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle` from the UI components for layout.
 * - `Separator` for visual separation between sections.
 * - `ModeToggle` for theme toggling functionality.
 * - `Scroller` for managing scroll behavior.
 * - `UserSettingsModal` for user settings management.
 * - `SignOutButton` for signing out functionality.
 * - `MessageBoard` for displaying chat messages.
 * - `NewMessageForm` for sending new messages.
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
import {ModeToggle} from "@/features/users/components/mode-toggle.tsx";
import Scroller from "@/features/chat/components/new-message-form/Scroller.tsx";
import UserSettingsModal from "@/features/users/components/user-settings-modal/UserSettingsModal.tsx";
import SignOutButton from "@/features/auth/components/SignOutButton.tsx";
import MessageBoard from "@/features/chat/components/chat-board/MessageBoard.tsx";
import NewMessageForm from "@/features/chat/components/new-message-form/NewMessageForm.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/shared/components/avatar.tsx";


export default function TestNewChatPageUi() {
    return (
        <Card className="w-256 h-full flex flex-col p-8 justify-between">
            <CardHeader className="p-0 flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <CardTitle className="text-xl">Chat App</CardTitle>
                    <CardDescription>
                        Here is a public chat room. You can chat with other users.
                    </CardDescription>
                </div>
                <div className='flex gap-4'>
                    <SignOutButton/>
                    <UserSettingsModal/>
                    <ModeToggle/>
                </div>
            </CardHeader>
            <Separator/>
            <div className="h-full w-full flex gap-4">
                <CardContent className="w-1/3 h-full p-0 flex flex-col gap-2 overflow-y-auto flex-grow">
                    <Card className="w-full flex-row items-center gap-3 px-4 py-2 hover:bg-muted cursor-pointer">
                        <div className="relative">
                            <Avatar className="w-10 h-10">
                                <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            {/* Online status dot */}
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-white" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="font-medium text-sm">John Doe</span>
                            <span className="text-xs text-muted-foreground">Frontend Developer</span>
                        </div>
                    </Card>
                </CardContent>
                <Separator orientation="vertical"></Separator>
                <CardContent className="w-full h-full p-2 flex flex-col gap-6 overflow-y-auto flex-grow">
                    <MessageBoard/>
                    <Scroller></Scroller>
                    <NewMessageForm/>
                </CardContent>
            </div>
        </Card>
    );
}