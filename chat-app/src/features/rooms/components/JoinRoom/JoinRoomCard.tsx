import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/components/ui/card.tsx";
import {Label} from "@/shared/components/ui/label.tsx";
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/shared/components/ui/input-otp.tsx";
import {useState} from "react";
import {Button} from "@/shared/components/ui/button.tsx";
import useNavigateToRoom from "@/features/rooms/hooks/useNavigateToRoom.ts";

export default function JoinRoomCard() {
    const [roomCode, setRoomCode] = useState<string>("");

    function handleCodeChange(newCode: string) {
        setRoomCode(newCode);
    }

    const {handleNavigate} = useNavigateToRoom(roomCode);

    return (
        <Card className='w-full p-0 gap-4'>
            <CardHeader className='bg-border rounded-t-lg p-4'>
                <CardTitle>Join a room</CardTitle>
                <CardDescription>You can join a existing room with room-code.</CardDescription>
            </CardHeader>
            <CardContent className={'p-4'}>
                <div className={'flex flex-col gap-4'}>
                    <Label htmlFor={'room-code'} className=''>Room Code</Label>
                    <InputOTP id={'room-code'} maxLength={9} inputMode={"text"} onChange={handleCodeChange}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={6} />
                            <InputOTPSlot index={7} />
                            <InputOTPSlot index={8} />
                        </InputOTPGroup>
                    </InputOTP>
                    <Button onClick={handleNavigate}>Join room</Button>
                </div>
            </CardContent>
        </Card>
    );
}