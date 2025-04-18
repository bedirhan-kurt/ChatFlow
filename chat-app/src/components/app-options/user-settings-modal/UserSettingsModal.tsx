import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useRef} from "react";
import {User} from "lucide-react";
import UsernameInput from "@/components/app-options/user-settings-modal/UsernameInput.tsx";
import SaveButton from "@/components/app-options/user-settings-modal/SaveButton.tsx";
import {useUser} from "@/hooks/useUser.tsx";

// Responsible for manage states - will be transformed to shadcn/ui form
// Responsible for rendering UI

export default function UserSettingsModal() {
    const {username, setUsername} = useUser();
    const usernameContentRef = useRef<string>("");

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
                    <UsernameInput username={username} usernameContentRef={usernameContentRef} />
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <SaveButton usernameContentRef={usernameContentRef} setUsername={setUsername} />
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}