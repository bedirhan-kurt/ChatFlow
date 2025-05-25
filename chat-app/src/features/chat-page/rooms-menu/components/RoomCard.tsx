import {Avatar, AvatarImage} from "@/shared/components/ui/avatar.tsx";

type Room = {
    roomName: string;
    lastMessage?: string;
    numberOfMembers?: number;

};

export default function RoomCard({ roomName, lastMessage, numberOfMembers }: Room) {
    return (
        <div className="w-full flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-xl">
            <div className="relative">
                <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Room Avatar" />
                </Avatar>
            </div>
            <div className="w-full flex flex-col justify-center">
                <span className="font-medium text-sm">{roomName}</span>
                <div className="w-full flex flex-row justify-between">
                    <span className="text-xs text-muted-foreground">{lastMessage || "No messages yet"}</span>
                    {typeof numberOfMembers === "number" && (
                        <span className="text-xs text-muted-foreground">{numberOfMembers} members</span>
                    )}
                </div>
            </div>
        </div>
    );
}