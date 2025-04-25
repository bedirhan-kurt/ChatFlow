import {Button} from "@/shared/components/ui/button.tsx";
import {useNavigate} from "react-router";
import React from "react";

export default function NavigateRoomButton({roomCode, children}: {roomCode: string, children: React.ReactNode}) {
    const navigate = useNavigate();

    function handleClick() {
        if (roomCode) {
            navigate(`/room/${roomCode}`);
        } else {
            console.error("Room code is undefined");
        }
    }

    return (
        <Button onClick={handleClick}>{children}</Button>
    );
}