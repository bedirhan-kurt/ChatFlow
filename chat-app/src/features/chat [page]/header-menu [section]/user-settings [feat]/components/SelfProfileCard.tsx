import {Avatar} from "@radix-ui/react-avatar";
import {AvatarFallback} from "@/shared/components/ui/avatar.tsx";
import {generateInitials} from "@/features/chat [page]/[page-core]/lib/utils/generateInitials.ts";
import {Button} from "@/shared/components/ui/button.tsx";
import Dialog from "@/shared/components/Dialog.tsx";
import UserSettingsDialogContent
    from "@/features/chat [page]/header-menu [section]/user-settings [feat]/components/UserSettingsDialogContent.tsx";

type SelfProfileCardProps = {
    username: string;
    email: string;
}

export default function SelfProfileCard({username, email}: SelfProfileCardProps) {
    return (
        <>
            <Dialog
                trigger={
                    <Button variant='ghost' className="flex gap-2 py-6">
                        <div className="flex flex-col justify-center">
                            <span className="font-semibold text-xs text-right">{username}</span>
                            <span className="text-xs text-muted-foreground text-right">{email}</span>
                        </div>
                        <Avatar className="w-8 h-8 ">
                            <AvatarFallback className="bg-gray-200 dark:bg-zinc-700">{generateInitials(username)}</AvatarFallback>
                        </Avatar>
                    </Button>
                }
                title="Edit Profile"
                description="Change your username."
                content={<UserSettingsDialogContent />}
                actionButton={false}
                closeButton={false}
            />
        </>

    );
};