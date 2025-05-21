import {UserProvider} from "@/features/chat-page/header-menu/hooks/useUser.tsx";
import HeaderMenu from "@/features/chat-page/header-menu/components/HeaderMenu.tsx";
import UsersAndActionsMenu from "@/features/chat-page/users-and-actions-menu/components/UsersAndActionsMenu.tsx";
import ChatArea from "@/features/chat-page/chat-area/components/ChatArea.tsx";
import RoomsMenu from "@/features/chat-page/rooms-menu/components/RoomsMenu.tsx";

export default function NewChatPage() {
    return (
        <UserProvider>
            <div className="w-full h-screen flex flex-col">
                <HeaderMenu className="w-full flex justify-between items-center border-b px-6 py-4" />
                <div className="w-full h-full flex">
                    <RoomsMenu className="w-120 h-full flex flex-col items-center justify-between border-r p-4"></RoomsMenu>
                    <ChatArea className="w-full h-full p-4 flex flex-col flex-grow gap-1 bg-gray-50 dark:bg-gray-800"/>
                    <UsersAndActionsMenu className="w-120 h-full flex flex-col items-center justify-between border-l p-4" />
                </div>
            </div>
        </UserProvider>
    );
}