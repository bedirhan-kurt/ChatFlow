import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/components/ui/card.tsx";
import {useState} from "react";
import {Button} from "@/shared/components/ui/button.tsx";
import useRoomNavigation from "@/features/rooms/hooks/useRoomNavigation.ts";
import RoomCodeInput from "@/features/rooms/components/join-room/RoomCodeInput.tsx";
import InvalidRoomCodeAlert from "./InvalidRoomCodeAlert";

export default function JoinRoomCard() {
    const {handleCheckAndNavigate} = useRoomNavigation();
    const [roomCode, setRoomCode] = useState<string>("");

    return (
        <Card className='w-110 p-0 gap-4'>
            <CardHeader className='bg-border rounded-t-lg p-4'>
                <CardTitle>Join a room</CardTitle>
                <CardDescription>You can join a existing room with room-code.</CardDescription>
            </CardHeader>
            <CardContent className={'p-4 flex flex-col gap-4'}>
                <RoomCodeInput setRoomCode={setRoomCode}></RoomCodeInput>
                <InvalidRoomCodeAlert />
                <Button onClick={() => handleCheckAndNavigate(roomCode)}>Join room</Button>
            </CardContent>
        </Card>
    );
}