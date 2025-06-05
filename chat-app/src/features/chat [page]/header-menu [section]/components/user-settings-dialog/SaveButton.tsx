import updateUsername from "@/features/chat [page]/header-menu [section]/api/updateUsername.ts";
import {auth} from "@/shared/api/firebaseConfig.ts";
import {DialogClose} from "@/shared/components/ui/dialog.tsx";
import React from "react";
import {useUser} from "@/features/chat [page]/hooks [core]/useUser.tsx";

export default function  SaveButton({usernameContentRef}: {usernameContentRef: React.MutableRefObject<string>}) {
    const {setUsername} = useUser();

    function handleSave() {
        if (auth.currentUser) {
            setUsername(usernameContentRef.current);
            updateUsername(auth.currentUser.uid as string, usernameContentRef.current);
        } else {
            console.error("No authenticated user found.");
        }
    }

    return (
        <DialogClose
            type="button"
            onClick={handleSave}
            className="p-2 px-4 text-sm font-semibold rounded-lg bg-primary text-white dark:text-black dark:bg-white"
        >
            Save changes
        </DialogClose>
    );
}