import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/components/ui/card.tsx";
import RoomActionsMenu from "@/features/rooms/components/CreateRoom/RoomActionsMenu.tsx";

export default function CreateRoomCard() {
    return (
        <Card className='w-full p-0 gap-4'>
            <CardHeader className='bg-border rounded-t-lg p-4'>
                <CardTitle>Create a room</CardTitle>
                <CardDescription>You can create a new room and invite others.</CardDescription>
            </CardHeader>
            <CardContent className={'p-4'}>
                <div className={'flex flex-col gap-4'}>
                    <RoomActionsMenu></RoomActionsMenu>
                </div>
            </CardContent>
        </Card>
    );
}