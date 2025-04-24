import JoinRoomCard from "@/features/rooms/components/JoinRoom/JoinRoomCard.tsx";
import SeparatorWithText from "@/shared/components/ui/separator-with-text.tsx";
import CreateRoomCard from "@/features/rooms/components/CreateRoom/CreatRoomCard.tsx";
import {RoomContextProvider} from "@/features/rooms/hooks/useCreateRoom.tsx";

export default function RoomsPage() {
    return (
        <RoomContextProvider>
            <div className='flex flex-col items-center justify-center gap-6 h-screen'>
                <JoinRoomCard/>
                <SeparatorWithText/>
                <CreateRoomCard/>
            </div>
        </RoomContextProvider>

    );
};