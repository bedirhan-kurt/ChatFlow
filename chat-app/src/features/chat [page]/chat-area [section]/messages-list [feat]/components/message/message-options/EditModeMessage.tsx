import {Card, CardContent} from "@/shared/components/ui/card.tsx";

/**
 * Message Component
 *
 * Responsibility:
 * Responsible for rendering a single message based on the user type (admin, other user, or self).
 * This components dynamically adjusts its appearance and structure depending on whether the message
 * is owned by the current user, sent by an admin, or sent by another user.
 *
 * Features:
 * - Displays the message content, author, and creation time.
 * - Adjusts styling and layout based on the message ownership and author type.
 * - Includes a dropdown for message options if the message is owned by the current user.
 *
 * Props:
 * - `id` (string): Unique identifier for the message.
 * - `message` (string): The content of the message.
 * - `author` (string): The username of the message author.
 * - `isOwned` (boolean, optional): Indicates if the message is owned by the current user. Defaults to `false`.
 * - `createdAt` (string): The timestamp of when the message was created.
 *
 * @components
 * @param {Object} props - The props for the components.
 * @param {string} props.id - Unique identifier for the message.
 * @param {string} props.message - The content of the message.
 * @param {string} props.author - The username of the message author.
 * @param {boolean} [props.isOwned=false] - Indicates if the message is owned by the current user.
 * @param {string} props.createdAt - The timestamp of when the message was created.
 * @returns {TSX.Element} The rendered Message components.
 */

export default function EditModeMessage({message, createdAt}: {
    message: string,
    createdAt: string
}) {

    return (
        <div className="w-full flex flex-col gap-2 items-end">
            <div className="flex flex-col gap-1 items-end">
                <Card className="w-fit p-3 flex gap-2 text-sm bg-white dark:bg-zinc-900 dark:text-primary">
                    <CardContent className="p-0 flex gap-2 items-center">
                        {message}
                    </CardContent>
                </Card>
            </div>
            <span className="text-xs text-muted-foreground">{createdAt}</span>
        </div>
    );
}