import {Button} from "@/shared/components/ui/button.tsx";
import {Forward} from "lucide-react";

interface InviteButtonProps {
    asChild?: boolean;
}

export default function InviteButton({ asChild = false }: InviteButtonProps) {
    return (
        <Button
            variant="outline"
            className="shadow w-full"
            asChild={asChild}
        >
            <div className="flex gap-2">
                <span>Invite</span>
                <Forward></Forward>
            </div>
        </Button>
    );
};
