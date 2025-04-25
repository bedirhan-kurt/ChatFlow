import { Button } from "@/shared/components/ui/button.tsx";
import { useNavigate } from "react-router";
import React from "react";
import { formatRoomCode } from "@/features/rooms/lib/utils.ts";

export default function NavigateRoomButton({ roomCode, children }: { roomCode: string, children: React.ReactNode }) {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(roomCode);
        const formattedCode = roomCode.length === 11 ? roomCode : formatRoomCode(roomCode);
        formattedCode ? navigate(`/room/${formattedCode}`) : console.error("Room code is undefined");
    };

    return <Button onClick={handleClick}>{children}</Button>;
}