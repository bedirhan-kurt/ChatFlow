import {Label} from "@/shared/components/ui/label.tsx";
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/shared/components/ui/input-otp.tsx";

export default function RoomCodeInput({setRoomCode}: { setRoomCode: (code: string) => void }) {
    function handleCodeChange(newCode: string) {
        setRoomCode(newCode);
    }

    return (
        <div className={'flex flex-col gap-4'}>
            <Label htmlFor={'room-code'} className=''>Room Code</Label>
            <InputOTP id={'room-code'} maxLength={9} inputMode={"text"} onChange={handleCodeChange}>
                <InputOTPGroup>
                    <InputOTPSlot index={0}/>
                    <InputOTPSlot index={1}/>
                    <InputOTPSlot index={2}/>
                </InputOTPGroup>
                <InputOTPSeparator/>
                <InputOTPGroup>
                    <InputOTPSlot index={3}/>
                    <InputOTPSlot index={4}/>
                    <InputOTPSlot index={5}/>
                </InputOTPGroup>
                <InputOTPSeparator/>
                <InputOTPGroup>
                    <InputOTPSlot index={6}/>
                    <InputOTPSlot index={7}/>
                    <InputOTPSlot index={8}/>
                </InputOTPGroup>
            </InputOTP>
        </div>
    );
};