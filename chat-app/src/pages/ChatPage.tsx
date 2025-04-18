// ChatPage.tsx
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {ModeToggle} from "@/components/app-options/mode-toggle.tsx";
import Scroller from "../components/new-message/Scroller.tsx";
import UserSettingsModal from "@/components/app-options/UserSettingsModal.tsx";
import SignOutButton from "@/components/auth/SignOutButton.tsx";
import {UserProvider} from "@/hooks/useUser.tsx";
import MessageBoard from "@/components/chat-area/MessageBoard.tsx";
import NewMessageForm from "@/components/new-message/NewMessageForm.tsx";
import {MessageContextProvider} from "@/hooks/useSendMessage.tsx";

// Responsible for component rendering

export default function ChatPage() {

    return (
        <UserProvider>
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
        </UserProvider>
    );
}