import {Label} from "@/shared/components/ui/label.tsx";
import InvalidRoomCodeAlert from "@/features/chat-page/rooms-menu/components/join-room/InvalidRoomCodeAlert.tsx";
import RoomCodeInput from "@/features/chat-page/rooms-menu/components/join-room/RoomCodeInput.tsx";

export function JoinRoomDialogContent({ handleCodeChange, error }: { handleCodeChange: (newCode: string) => void; error?: string | null }) {
    return (
        <div className="flex gap-2">
            <Label htmlFor="roomCode" className="sr-only">
                Room Code
            </Label>
            <div className="flex flex-col gap-2">
                <RoomCodeInput handleCodeChange={handleCodeChange}/>
                {error && <InvalidRoomCodeAlert />}
            </div>
        </div>
    );
}