import {Button} from "@/shared/components/ui/button.tsx";
import {Settings} from "lucide-react";
import Dialog from "@/shared/components/Dialog.tsx";

export default function RoomOptionsDialog() {
    return (
        <Dialog
            trigger={
                <Button variant="outline" className="hover:cursor-pointer">
                    <span>Options</span>
                    <Settings></Settings>
                </Button>
            }
            title="Are you sure you want to delete this room?"
            description="All content in the room will be deleted."
            content={null}
            actionButton={<Button>Save</Button>}
        />
    );
};