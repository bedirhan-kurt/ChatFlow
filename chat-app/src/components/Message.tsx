import {Card, CardContent} from "@/components/ui/card.tsx";
import {MessageOptionsDropdown} from "@/components/MessageOptionsDropdown.tsx";

// Responsible for rendering a single message by user type; admin, other user, or self

export default function Message({id, message, author, isOwned = false, createdAt}: {
    id: string,
    message: string,
    author: string,
    isOwned?: boolean,
    createdAt: string
}) {

    const authorName = isOwned ? "You" : author
    const isAdmin = author === "ADMIN"
    const flexDirection = isOwned ? "items-end" : "items-start"
    const cardClass =
        isOwned ? "bg-gray-100 text-black dark:bg-input dark:text-primary" :
        isAdmin ? "bg-primary text-white dark:bg-red-500 dark:text-white" :
        "bg-primary-500 dark:bg-secondary dark:text-white"
    const messageStructure = isOwned ? (
        <>
            <MessageOptionsDropdown id={id} />
            <span>{message}</span>
        </>
    ) : <span>{message}</span>;

    return (
        <div className={`w-full flex flex-col gap-2 ${flexDirection}`}>
            <div className={`flex flex-col gap-1 ${flexDirection}`}>
                <div className="flex gap-2 items-center">
                    <span className="font-medium">{authorName}</span>
                </div>
                <Card
                    className={`w-fit p-3 flex gap-2 text-sm 
                           ${cardClass}
                       `}
                >
                    <CardContent className="p-0 flex gap-2 items-center">
                        {messageStructure}
                    </CardContent>
                </Card>
            </div>
            <span className="text-xs text-muted-foreground">{createdAt}</span>
        </div>
    );
}