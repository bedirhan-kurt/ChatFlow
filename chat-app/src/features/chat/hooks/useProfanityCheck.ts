import {useState, useCallback, useMemo} from "react";
import { Filter } from "bad-words";

/**
 * Custom hook to check for profanity in a given message.
 * Returns the result and a function to check new input.
 */
export function useProfanityCheck() {
    const [isProfane, setIsProfane] = useState(false);
    const filter = useMemo(() => new Filter(), []);

    const checkProfanity = useCallback((text: string) => {
        const result = filter.isProfane(text);
        setIsProfane(result);
        return result;
    }, []);

    return { isProfane, checkProfanity };
}
