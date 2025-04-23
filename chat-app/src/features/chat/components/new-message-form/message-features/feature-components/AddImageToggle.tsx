import { useState } from "react";
import { Toggle } from "@/shared/components/ui/toggle.tsx";
import {Image} from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/shared/components/ui/popover.tsx";

export default function AddAttachmentToggle() {
    const [showPicker, setShowPicker] = useState(false); // Picker'ın görünme durumu

    return (
        <div className="flex flex-col gap-4">
            {/* Toggle Button */}
            <Popover open={showPicker} onOpenChange={setShowPicker}>
                <PopoverTrigger asChild>
                    <Toggle
                        onClick={() => setShowPicker(!showPicker)}
                        variant="outline"
                        className="w-fit"
                    >
                        <Image />
                    </Toggle>
                </PopoverTrigger>

                <PopoverContent side="top" className="flex flex-col gap-2 p-4 w-full max-w-md mx-auto bg-white dark:bg-zinc-800 text-xl rounded-xl shadow-md">

                </PopoverContent>
            </Popover>
        </div>
    );
}
