import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/components/ui/card.tsx";
import {Label} from "@/shared/components/ui/label.tsx";
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/shared/components/ui/input-otp.tsx";
import {Button} from "@/shared/components/ui/button.tsx";

export default function RoomsPage() {
    return (
        <div className='flex flex-col items-center justify-center gap-6 h-screen'>
            <Card className='w-full p-0 gap-4'>
                <CardHeader className='bg-border rounded-t-lg p-4'>
                    <CardTitle>Join a room</CardTitle>
                    <CardDescription>You can join a existing room with room-code.</CardDescription>
                </CardHeader>
                <CardContent className={'p-4'}>
                    <div className={'flex flex-col gap-4'}>
                        <Label htmlFor={'room-code'} className=''>Room Code</Label>
                        <InputOTP id={'room-code'} maxLength={9}>
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
                        <Button variant={'default'}>Join Room</Button>
                    </div>
                </CardContent>
            </Card>
            <div className="w-full flex items-center gap-2">
                <hr className="w-full border-t border-primary"/>
                <span className="text-primary">or</span>
                <hr className="w-full border-t border-primary"/>
            </div>
            <Card className='w-full p-0 gap-4'>
                <CardHeader className='bg-border rounded-t-lg p-4'>
                    <CardTitle>Create a room</CardTitle>
                    <CardDescription>You can create a new room and invite others.</CardDescription>
                </CardHeader>
                <CardContent className={'p-4'}>
                    <div className={'flex flex-col gap-4'}>
                        <Button variant={'secondary'}>Create room</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};