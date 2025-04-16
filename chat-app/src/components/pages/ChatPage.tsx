// ChatPage.tsx
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {ModeToggle} from "@/components/mode-toggle.tsx";
import Scroller from "../Scroller.tsx";
import UserSettingsModal from "@/components/UserSettingsModal.tsx";
import SignOutButton from "@/components/SignOutButton.tsx";
import {UserProvider} from "@/hooks/useUser.tsx";
import MessageList from "@/components/MessageList.tsx";
import MessageBar from "@/components/MessageBar.tsx";

// Responsible for component rendering

export default function ChatPage() {

    return (
        <UserProvider>
            <Card className="w-164 h-full flex flex-col p-8 justify-between">
                <CardHeader className="p-0 flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <CardTitle className="text-xl">Chat App</CardTitle>
                        <CardDescription>
                            Here is a public chat room. You can chat with other users.
                        </CardDescription>
                    </div>
                    <div className='flex gap-4'>
                        <SignOutButton />
                        <UserSettingsModal />
                        <ModeToggle />
                    </div>
                </CardHeader>
                <Separator />
                <CardContent className="h-full p-2 flex flex-col gap-6 overflow-y-auto flex-grow">
                    <MessageList/>
                    <Scroller></Scroller>
                    <MessageBar/>
                </CardContent>
            </Card>
        </UserProvider>
    );
}