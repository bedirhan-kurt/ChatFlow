import HeaderMenu from "@/features/chat [page]/header-menu [section]/[section-core]/components/HeaderMenu.tsx";
import UsersMenu from "@/features/chat [page]/users-menu [section]/[section-core]/components/UsersMenu.tsx";
import ChatArea from "@/features/chat [page]/chat-area [section]/[section-core]/components/ChatArea.tsx";
import { RoomProvider } from "@/features/chat [page]/[page-core]/context [core]/RoomContext";
import RoomsMenu from "@/features/chat [page]/rooms-menu [section]/[section-core]/components/RoomsMenu.tsx";
import {
    useJoinedRooms
} from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/hooks/useJoinedRooms.ts";
import {useUser} from "@/features/chat [page]/[page-core]/hooks [core]/useUser.tsx";


export default function AppPage() {
    const { user } = useUser()
    const { isRoomsEmpty } = useJoinedRooms(user.uid)
    console.log(isRoomsEmpty)

    return (
        <RoomProvider>
            <div className="w-full h-screen flex flex-col">
                <HeaderMenu className="w-full flex justify-between items-center bg-sidebar border-b" />
                <div className="w-full h-full flex overflow-hidden">
                    <RoomsMenu className={`${isRoomsEmpty ? 'w-full' : 'w-2/8'} h-full flex flex-col items-center bg-sidebar border-r p-4`}></RoomsMenu>
                    {!isRoomsEmpty ?
                        (<>
                            <ChatArea className="w-4/8 h-full flex flex-col flex-grow gap-1 bg-background"/>
                            <UsersMenu className="w-2/8 h-full flex flex-col items-center bg-sidebar border-l p-4" />)
                         </>)
                        : null
                    }
                </div>
            </div>
        </RoomProvider>
    );
}
