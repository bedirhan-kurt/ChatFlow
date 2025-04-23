import JoinRoomCard from "@/features/rooms/components/JoinRoomCard.tsx";
import SeparatorWithText from "@/shared/components/ui/separator-with-text.tsx";
import CreateRoomCard from "@/features/rooms/components/CreatRoomCard.tsx";

export default function RoomsPage() {
    return (
        <div className='flex flex-col items-center justify-center gap-6 h-screen'>
            <JoinRoomCard/>
            <SeparatorWithText />
            <CreateRoomCard />
        </div>
    );
};