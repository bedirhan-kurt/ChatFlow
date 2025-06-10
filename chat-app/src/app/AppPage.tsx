import HeaderMenu from "@/features/chat [page]/header-menu [section]/[section-core]/components/HeaderMenu.tsx";
import UsersAndActionsMenu from "@/features/chat [page]/users-and-actions-menu [section]/components/UsersAndActionsMenu.tsx";
import ChatArea from "@/features/chat [page]/chat-area [section]/components/ChatArea.tsx";
import { RoomProvider } from "@/features/chat [page]/[page-core]/context [core]/RoomContext";
import RoomsMenu from "@/features/chat [page]/rooms-menu [section]/RoomsMenu.tsx";


export default function AppPage() {
    return (
        <RoomProvider>
            <div className="w-full h-screen flex flex-col">
                <HeaderMenu className="w-full flex justify-between items-center border-b" />
                <div className="w-full h-full flex">
                    <RoomsMenu className="w-2/8 h-full flex flex-col items-center justify-between border-r p-4"></RoomsMenu>
                    <ChatArea className="w-4/8 h-full p-4 flex flex-col flex-grow gap-1 bg-gray-50 dark:bg-gray-800"/>
                    <UsersAndActionsMenu className="w-2/8 h-full flex flex-col items-center justify-between border-l p-4" />
                </div>
            </div>
        </RoomProvider>
    );
}