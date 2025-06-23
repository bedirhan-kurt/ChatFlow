import {CircleCheck} from "lucide-react";
import {DialogClose} from "@radix-ui/react-dialog";
import {Button} from "@/shared/components/ui/button.tsx";
import {useRoom} from "@/features/chat [page]/[page-core]/hooks [core]/useRoom.tsx";

export default function SuccessScreen({createdRoomCode, form}: { createdRoomCode: string | null, form: any }) {
    const {setRoomCode} = useRoom()

    function handleClick() {
        if (!createdRoomCode) {
            console.error("Room code is not defined");
        } else {
            setRoomCode(createdRoomCode)
        }
    }

    return (
        <div className="h-64 flex flex-col items-center justify-end text-center">
            <div className="h-full flex flex-col gap-4 items-center justify-center">
                <CircleCheck className="w-16 h-16"></CircleCheck>
                <h2 className="text-xl font-semibold mb-4">Room Created Successfully!</h2>
            </div>
            <div className="w-full flex gap-2 items-center justify-center">
                <DialogClose onClick={() => form.reset()} className="w-36 mt-4" asChild><Button variant={"outline"}>Close</Button></DialogClose>
                <DialogClose onClick={() => {
                    form.reset()
                    handleClick()
                }} className="w-36 mt-4" asChild><Button>Continue to room</Button></DialogClose>
            </div>
        </div>
    );
};