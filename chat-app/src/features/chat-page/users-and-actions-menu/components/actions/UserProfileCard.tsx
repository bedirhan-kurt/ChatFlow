import {Avatar, AvatarImage} from "@/shared/components/ui/avatar.tsx";

type Member = {
    username: string;
    isOnline: boolean;
    lastMessage: string;
    lastMessageDate: string;
};

export default function UserProfileCard({username, isOnline, lastMessage, lastMessageDate}: Member) {
    const statusColor = isOnline ? "bg-green-500" : "bg-red-500";

    return (
        <div className="w-full flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-xl">
            <div className="relative">
                <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                </Avatar>
                {/* Online status dot */}
                <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 ${statusColor} rounded-full ring-2 ring-white`} />
            </div>
            <div className="w-full flex flex-col justify-center">
                <span className="font-medium text-sm">{username}</span>
                <div className='w-full flex flex-row justify-between'>
                    <span className="text-xs text-muted-foreground">{lastMessage}</span>
                    <span className="text-xs text-muted-foreground">{lastMessageDate}</span>
                </div>
            </div>
        </div>
    );
};