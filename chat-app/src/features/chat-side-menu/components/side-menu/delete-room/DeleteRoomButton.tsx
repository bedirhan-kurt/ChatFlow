import {Button} from "@/shared/components/ui/button.tsx";
import {Trash2} from "lucide-react";

interface InviteButtonProps {
    asChild?: boolean;
}

export default function DeleteRoomButton({ asChild = false }: InviteButtonProps) {
    return (
        <Button
            variant="outline"
            className="shadow w-10"
            asChild={asChild}
        >
            <div className="flex gap-2">
                <Trash2></Trash2>
            </div>
        </Button>
    );
};
