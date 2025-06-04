import {useState} from "react";

export default function useTagInput(onChange: (value: string[]) => void, value: string[]) {
    const [inputValue, setInputValue] = useState("");

    const addTag = () => {
        const newTag = inputValue.trim();
        if (!newTag || value.includes(newTag)) return;
        onChange([...value, newTag]);
        setInputValue("");
    };

    const removeTag = (tagToRemove: string) => {
        onChange(value.filter(tag => tag !== tagToRemove));
    };

    return {addTag, removeTag, inputValue, setInputValue}
}