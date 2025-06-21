import {Avatar} from "@radix-ui/react-avatar";
import {AvatarFallback} from "@/shared/components/ui/avatar.tsx";
import {generateInitials} from "@/features/chat [page]/[page-core]/lib/utils/generateInitials.ts";

type SelfProfileCardProps = {
    username: string;
    email: string;
}

export default function SelfProfileCard({username, email}: SelfProfileCardProps) {
    return (
        <div className="flex gap-2">
            <div className="flex flex-col justify-center">
                <span className="font-medium text-sm text-right">{username}</span>
                <span className="text-xs text-muted-foreground text-right">{email}</span>
            </div>
            <Avatar className="w-10 h-10 ">
                <AvatarFallback className="bg-gray-200 dark:bg-zinc-700">{generateInitials(username)}</AvatarFallback>
            </Avatar>
        </div>
    );
};