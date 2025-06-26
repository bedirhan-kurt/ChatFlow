import { Message } from "@/features/chat [page]/chat-area [section]/messages-list [feat]/lib/types";
import { ArrowRight } from "lucide-react";
import {Button} from "@/shared/components/ui/button.tsx";
import useScrollToSearchedMessage
    from "@/features/chat [page]/header-menu [section]/search-message [feat]/hooks/useScrollToSearchedMessage.tsx";
import useSearchMessage
    from "@/features/chat [page]/header-menu [section]/search-message [feat]/hooks/useSearchMessage.tsx";

export default function FilteredMessageCard({message}: {message: Message}) {
    const { scrollToSearchedMessage } = useScrollToSearchedMessage();
    const { setSearchMessage } = useSearchMessage();

    return (
        <div className="w-full flex items-center justify-between p-2 border-b border-gray-200">
            <div className='flex flex-col gap-2'>
                <p className="text-sm text-gray-800">{message.content}</p>
                <span className="text-xs text-gray-500">{new Date(message.createdAt).toLocaleString()}</span>
            </div>
            <Button variant="ghost" onClick={() => {
                scrollToSearchedMessage(message.id)
                setSearchMessage("")  // Clear the search message after navigating
            }}>
                <ArrowRight size='18'></ArrowRight>
            </Button>
        </div>
    );
}