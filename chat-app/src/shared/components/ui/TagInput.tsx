import {Button} from "@/shared/components/ui/button.tsx";
import {Input} from "@/shared/components/ui/input.tsx";
import {Badge} from "@/shared/components/ui/badge.tsx";
import useTagInput from "@/shared/hooks/useTagInput.ts";


interface TagInputProps {
    value: string[];
    onChange: (tags: string[]) => void;
    placeholder?: string;
}

export default function TagInput({ value, onChange, placeholder }: TagInputProps) {
    const { addTag, removeTag, inputValue, setInputValue } = useTagInput(onChange, value)

    return (
        <div className="flex flex-col gap-2 sm:min-w-[450px]">
            <div className="flex gap-2">
                <Input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={placeholder || "Enter a tag"}
                    className="border px-3 py-2 rounded-md flex-1"
                />
                <Button type="button" onClick={addTag}>Add</Button>
            </div>

            <div className="flex flex-wrap gap-2">
                {value.map((tag, index) => (
                    <Badge key={index} className="py-0" variant="secondary">
                        {tag}
                        <Button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="p-0 px-2 shadow-none"
                            variant="secondary"
                        >
                            ×
                        </Button>
                    </Badge>
                ))}
            </div>
        </div>
    );
}