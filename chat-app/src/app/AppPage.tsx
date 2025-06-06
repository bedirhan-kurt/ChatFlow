import HeaderMenu from "@/features/chat [page]/header-menu [section]/components/HeaderMenu.tsx";
import UsersAndActionsMenu from "@/features/chat [page]/users-and-actions-menu [section]/components/UsersAndActionsMenu.tsx";
import ChatArea from "@/features/chat [page]/chat-area [section]/components/ChatArea.tsx";
import RoomsMenu from "@/features/chat [page]/rooms-menu [section]/components/RoomsMenu.tsx";
import { RoomProvider } from "@/features/chat [page]/context [core]/RoomContext";
import { UserProvider } from "@/features/chat [page]/context [core]/UserContext.tsx";


export default function AppPage() {
    return (
        <UserProvider>
            <RoomProvider>
                <div className="w-full h-screen flex flex-col">
                    <HeaderMenu className="w-full flex justify-between items-center border-b px-6 py-4" />
                    <div className="w-full h-full flex">
                        <RoomsMenu className="w-2/8 h-full flex flex-col items-center justify-between border-r p-4"></RoomsMenu>
                        <ChatArea className="w-4/8 h-full p-4 flex flex-col flex-grow gap-1 bg-gray-50 dark:bg-gray-800"/>
                        <UsersAndActionsMenu className="w-2/8 h-full flex flex-col items-center justify-between border-l p-4" />
                    </div>
                </div>
            </RoomProvider>
        </UserProvider>
    );
}