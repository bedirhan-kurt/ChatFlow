// ChatPage.tsx
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
import {MessageContextProvider} from "@/features/chat/hooks/useSendMessage.tsx";

// Responsible for component rendering

export default function ChatPage() {

    return (
        <MessageContextProvider>
            <Card className="w-164 h-full flex flex-col p-8 justify-between">
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
                <CardContent className="h-full p-2 flex flex-col gap-6 overflow-y-auto flex-grow">
                    <MessageBoard/>
                    <Scroller></Scroller>
                    <NewMessageForm/>
                </CardContent>
            </Card>
        </MessageContextProvider>
    );
}