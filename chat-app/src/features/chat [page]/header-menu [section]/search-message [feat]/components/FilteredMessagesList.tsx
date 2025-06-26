import {Card, CardContent} from "@/shared/components/ui/card.tsx";
import useSearchMessage
    from "@/features/chat [page]/header-menu [section]/search-message [feat]/hooks/useSearchMessage.tsx";
import FilteredMessageCard
    from "@/features/chat [page]/header-menu [section]/search-message [feat]/components/FilteredMessageCard.tsx";

export default function FilteredMessagesList({className}: {className?: string}) {
    const {filteredMessages} = useSearchMessage();
    const filteredMessagesElements = filteredMessages.map((message) => (
        <FilteredMessageCard key={message.id} message={message} />
    ));

    return (
        <Card className={`${className} absolute w-full max-h-96 overflow-y-auto mt-2 px-3 py-2`}>
            <CardContent className='p-0 flex flex-col gap-2'>
                {filteredMessages.length > 0 ? (
                    filteredMessagesElements
                ) : (
                    <div className="text-center text-gray-500">No messages found</div>
                )}
            </CardContent>
        </Card>
    );
}