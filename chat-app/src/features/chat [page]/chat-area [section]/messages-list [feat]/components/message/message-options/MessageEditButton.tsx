import {Pencil} from "lucide-react";
import {useState} from "react";
import {Separator} from "@/shared/components/ui/separator.tsx";
import AlertDialog from "@/shared/components/AlertDialog.tsx";
import EditMessageForm
    from "@/features/chat [page]/chat-area [section]/messages-list [feat]/components/message/message-options/EditMessageForm.tsx";
import {editMessage} from "@/features/chat [page]/chat-area [section]/messages-list [feat]/api/editMessage.ts";

export default function MessageEditButton({roomCode, id, message, createdAt}: {
    roomCode: string,
    id: string,
    message: string,
    createdAt: string
}) {
    const [newMessage, setNewMessage] = useState<string>(message || "");


    return (
        <AlertDialog
            trigger={
                <div className="w-full size-4 flex gap-2 items-center">
                    <Pencil className="size-3"/>
                    <span>Edit</span>
                </div>
            }
            title="Edit Message"
            description="You can preview the current message and write a new one below."
            content={
                <div>
                    <Separator/>
                    <EditMessageForm
                        message={message}
                        newMessage={newMessage}
                        setNewMessage={setNewMessage}
                        createdAt={createdAt}
                    />
                </div>
            }
            cancelText="Cancel"
            actionText="Save"
            action={async () => editMessage(roomCode, id, newMessage)}
        />
    );
}
