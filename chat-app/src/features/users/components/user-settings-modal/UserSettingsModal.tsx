import Dialog from "@/shared/components/Dialog.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {User} from "lucide-react";
import {useUser} from "@/features/users/hooks/useUser.tsx";
import UserSettingsForm from "@/features/users/components/user-settings-modal/UserSettingsForm.tsx";

// Responsible for manage states - will be transformed to shadcn/ui form
// Responsible for rendering UI

export default function UserSettingsModal() {
    const {username, setUsername} = useUser();

    return (
        <>
            <Dialog
                trigger={<Button variant="outline"><User/></Button>}
                title="Edit profile"
                description="Make changes to your profile here. Click save when you're done."
                content={<UserSettingsForm currentUsername={username} setUsername={setUsername}></UserSettingsForm>}
                closeButton={false}
            />
        </>
    )
}