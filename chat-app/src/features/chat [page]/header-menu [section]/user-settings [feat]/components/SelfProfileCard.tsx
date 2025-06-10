import {Avatar} from "@radix-ui/react-avatar";
import {AvatarImage} from "@/shared/components/ui/avatar.tsx";

export default function SelfProfileCard() {
    return (
        <div className="flex gap-2">
            <div className="flex flex-col justify-center">
                <span className="font-medium text-sm text-right">Your Name</span>
                <span className="text-xs text-muted-foreground text-right">bedirhan_kurt_@outlook.com</span>
            </div>
            <Avatar className="w-10 h-10 ">
                <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" className="rounded-full"/>
            </Avatar>
        </div>
    );
};