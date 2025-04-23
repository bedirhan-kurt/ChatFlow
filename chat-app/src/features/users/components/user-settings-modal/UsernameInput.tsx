import {Label} from "@/shared/components/ui/label.tsx";
import {Input} from "@/shared/components/ui/input.tsx";
import React from "react";

export default function UsernameInput({username, usernameContentRef}: {username: string, usernameContentRef: React.MutableRefObject<string>}) {
    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        usernameContentRef.current = event.currentTarget.value;
    }

    return (
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
                Name
            </Label>
            <Input id="name" defaultValue={username} className="col-span-3" onChange={(e) => handleChange(e)}/>
        </div>
    );
}