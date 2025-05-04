import {Avatar, AvatarImage} from "@/shared/components/avatar.tsx";
import {Card} from "@/shared/components/ui/card.tsx";

type Member = {
    username: string;
    isOnline: boolean;
    lastMessage: string;
};

export default function UserProfileCard({username, isOnline, lastMessage}: Member) {
    const statusColor = isOnline ? "bg-green-500" : "bg-red-500";

    return (
        <Card className="w-full flex-row items-center gap-3 px-4 py-2 hover:bg-muted cursor-pointer">
            <div className="relative">
                <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                </Avatar>
                {/* Online status dot */}
                <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 ${statusColor} rounded-full ring-2 ring-white`} />
            </div>
            <div className="flex flex-col justify-center">
                <span className="font-medium text-sm">{username}</span>
                <span className="text-xs text-muted-foreground">{lastMessage}</span>
            </div>
        </Card>
    );
};