import {CircleCheck} from "lucide-react";
import {DialogClose} from "@radix-ui/react-dialog";
import {Button} from "@/shared/components/ui/button.tsx";

export default function SuccessScreen({form}: { form: any }) {
    return (
        <div className="h-64 flex flex-col items-center justify-end text-center">
            <div className="h-full flex flex-col gap-4 items-center justify-center">
                <CircleCheck className="w-16 h-16"></CircleCheck>
                <h2 className="text-xl font-semibold mb-4">Room Created Successfully!</h2>
            </div>
            <div className="w-full flex gap-2 items-center justify-center">
                <DialogClose onClick={() => form.reset()} className="w-36 mt-4" asChild><Button variant={"outline"}>Close</Button></DialogClose>
                <Button onClick={() => form.reset()} className="w-36 mt-4">Continue to room</Button>
            </div>
        </div>
    );
};