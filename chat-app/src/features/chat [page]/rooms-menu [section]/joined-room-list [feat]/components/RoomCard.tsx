import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar.tsx";
import {
    generateInitials
} from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/lib/utils/generateInitials.ts";
import { Button } from "@/shared/components/ui/button";
import { useRoom } from "@/features/chat [page]/[page-core]/hooks [core]/useRoom";

type RoomCard = {
    roomCode: string;
    roomName: string;
    lastMessage?: string;
    numberOfMembers?: number;
    createdAt: string;
};

export default function RoomCard({ roomCode, roomName, lastMessage, numberOfMembers, createdAt }: RoomCard) {
    const formattedDate = new Date(createdAt).toLocaleDateString();
    const {setRoomCode} = useRoom()

    function handleClick() {
        if (!roomCode) {
            console.error("Room code is not defined");
        } else {
            setRoomCode(roomCode)
            console.log(`Navigating to room with code: ${roomCode}`);
        }
    }

    return (
        <Button className="h-14 w-full flex items-center gap-3 px-4 hover:bg-muted rounded-lg" variant={"ghost"} onClick={handleClick}>
            <div className="flex items-center gap-3 w-full justify-between">
                <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gray-200 dark:bg-zinc-700">{generateInitials(roomName)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col w-full items-start">
                        <span className="font-medium text-sm">{roomName}</span>
                        <span className="text-xs text-muted-foreground">{lastMessage || "No messages yet"}</span>
                    </div>
                </div>
                <div className="flex flex-col items-end text-right gap-0.5">
                    {typeof numberOfMembers === "number" && (
                        <span className="text-xs text-muted-foreground">{numberOfMembers} members</span>
                    )}
                    <span className="text-[10px] text-muted-foreground">Created: {formattedDate}</span>
                </div>
            </div>
        </Button>
    );
}