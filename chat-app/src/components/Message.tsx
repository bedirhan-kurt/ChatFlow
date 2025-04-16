import {Card, CardContent} from "@/components/ui/card.tsx";
import {MessageOptionsDropdown} from "@/components/MessageOptionsDropdown.tsx";
import MessageDeleteButton from "@/components/MessageDeleteButton.tsx";
import MessageEditButton from "@/components/MessageEditButton.tsx";

// Responsible for rendering a single message

export default function Message({id, message, author, isOwned = false, createdAt}: {
    id: string,
    message: string,
    author: string,
    isOwned?: boolean,
    createdAt: string
}) {

    const authorName = isOwned ? "You" : author
    const isAdmin = author === "ADMIN"

    return (
        <div className={`w-full flex flex-col gap-2 ${isOwned ? "items-end" : "items-start"}`}>
            <div className={`flex flex-col gap-1 ${isOwned ? "items-end" : "items-start"}`}>
                <div className="flex gap-2 items-center">
                    <span className="font-medium">{authorName}</span>
                </div>
                <Card
                    className={`w-fit p-3 flex gap-2 text-sm 
                           ${isOwned ? "bg-gray-100 text-black dark:bg-input dark:text-primary" : isAdmin ? "bg-primary text-white dark:bg-red-500 dark:text-white" : "bg-primary-500 dark:bg-secondary dark:text-white"}
                       `}
                >
                    <CardContent className="p-0 flex gap-2 items-center">
                        {isOwned ? (
                            <MessageOptionsDropdown>
                                <MessageDeleteButton id={id}/>
                                <MessageEditButton id={id}/>
                            </MessageOptionsDropdown>
                        ) : null}
                        {message}
                    </CardContent>
                </Card>
            </div>
            <span className="text-xs text-muted-foreground">{createdAt}</span>
        </div>
    );
}