import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/components/ui/card.tsx";
import {useState} from "react";
import {Button} from "@/shared/components/ui/button.tsx";
import useRoomNavigation from "@/features/rooms/hooks/useRoomNavigation.ts";
import RoomCodeInput from "@/features/rooms/components/join-room/RoomCodeInput.tsx";
import InvalidRoomCodeAlert from "./InvalidRoomCodeAlert";
import {useRoomValidation} from "@/features/rooms/hooks/useRoomValidation.tsx";
import {RoomValidationProvider} from "@/features/rooms/hooks/useRoomValidation.tsx";

export default function JoinRoomCard() {
    const [joinRoomCode, setJoinRoomCode] = useState<string>("");

    return (
        <RoomValidationProvider>
            <JoinRoomCardContent joinRoomCode={joinRoomCode} setJoinRoomCode={setJoinRoomCode} />
        </RoomValidationProvider>
    );
}

// Inner component that uses the useRoomValidation hook
function JoinRoomCardContent({joinRoomCode, setJoinRoomCode}: {joinRoomCode: string, setJoinRoomCode: (code: string) => void}) {
    const {checkRoom} = useRoomValidation();
    const {navigateToRoom} = useRoomNavigation();

    return (
        <Card className='w-110 p-0 gap-4'>
            <CardHeader className='bg-border rounded-t-lg p-4'>
                <CardTitle>Join a room</CardTitle>
                <CardDescription>You can join a existing room with room-code.</CardDescription>
            </CardHeader>
            <CardContent className={'p-4 flex flex-col gap-4'}>
                <RoomCodeInput setJoinRoomCode={setJoinRoomCode}></RoomCodeInput>
                <InvalidRoomCodeAlert joinRoomCode={joinRoomCode}/>
                <Button
                    onClick={async () => {
                        const formattedCode = await checkRoom(joinRoomCode);
                        if (formattedCode) {
                            navigateToRoom(formattedCode);
                        }
                    }}
                >
                    Join room
                </Button>
            </CardContent>
        </Card>
    );
}


