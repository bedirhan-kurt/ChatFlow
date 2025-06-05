import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar.tsx";
import {
    generateInitials
} from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/lib/utils/generateInitials.ts";

type RoomCard = {
    roomName: string;
    lastMessage?: string;
    numberOfMembers?: number;
    createdAt: string;
};

export default function RoomCard({ roomName, lastMessage, numberOfMembers, createdAt }: RoomCard) {
    const formattedDate = new Date(createdAt).toLocaleDateString();

    return (
        <div className="w-full flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-xl">
            <div className="flex items-center gap-3 w-full justify-between">
                <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                        <AvatarFallback>{generateInitials(roomName)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
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
        </div>
    );
}