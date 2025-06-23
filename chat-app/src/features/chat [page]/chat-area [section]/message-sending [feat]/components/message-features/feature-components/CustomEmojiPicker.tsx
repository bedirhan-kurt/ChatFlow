import { useState } from "react";
import { Button } from "@/shared/components/ui/button.tsx";
import { Toggle } from "@/shared/components/ui/toggle.tsx";
import { Smile } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/shared/components/ui/popover.tsx";

export default function CustomEmojiPicker({appendToMessage}: { appendToMessage: (text: string) => void }) {
    const [showPicker, setShowPicker] = useState(false);
    const emojies = [
        '😊', '😀', '❤️', '🔥', '😂', '🎉', '👍', '💀', '🌹', '😎',
        '🥳', '🤩', '😢', '😡', '🤔', '🙌', '✨', '💪', '🌟',
        '🐱', '🐶', '🍕', '🚀', '🎶', '🍩', '⚽', '🎂', '📚',
        '🎬', '🌻', '👑', '💼', '🎨', '🎯', '🧩', '💡', '🎧', '🕶️'
    ];

    return (
        <div className="flex flex-col gap-4">
            {/* Toggle Button */}
            <Popover open={showPicker} onOpenChange={setShowPicker}>
                <PopoverTrigger asChild>
                    <Toggle
                        onClick={() => setShowPicker(!showPicker)}
                        variant="outline"
                        className="w-fit transition-colors duration-200 hover:cursor-pointer"
                    >
                        <Smile />
                    </Toggle>
                </PopoverTrigger>

                <PopoverContent side="top" className="flex flex-col gap-2 p-4 w-full max-w-md mx-auto bg-white dark:bg-zinc-800 text-xl rounded-xl shadow-md">
                    <div className="grid grid-cols-5 gap-2">
                        {emojies.map((emoji) => (
                            <Button
                                key={emoji}
                                onClick={() => appendToMessage(emoji)}
                                variant="ghost"
                                className="hover:scale-125 transition-transform cursor-pointer text-lg p-2"
                            >
                                {emoji}
                            </Button>
                        ))}
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
