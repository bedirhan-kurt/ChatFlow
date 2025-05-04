import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/shared/components/ui/dialog.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {User} from "lucide-react";
import {useUser} from "@/features/users/hooks/useUser.tsx";
import UserSettingsForm from "@/features/users/components/user-settings-modal/UserSettingsForm.tsx";

// Responsible for manage states - will be transformed to shadcn/ui form
// Responsible for rendering UI

export default function UserSettingsModal() {
    const {username, setUsername} = useUser();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline"><User /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <UserSettingsForm currentUsername={username} setUsername={setUsername}></UserSettingsForm>
                </div>
            </DialogContent>
        </Dialog>
    )
}