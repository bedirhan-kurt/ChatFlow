import { useState } from "react";
import { useInitialMessages } from "./useInitialMessages";
import { useMessageSubscription } from "./useMessageSubscription";

type Messages = {
    id: string;
    [key: string]: any;
};

export function useMessages() {
    const [messages, setMessages] = useState<Messages[]>([]);
    const { isLoading, error } = useInitialMessages(setMessages);

    useMessageSubscription(setMessages);

    return { messages, isLoading, error };
}
