import {Card, CardContent} from "@/shared/components/ui/card.tsx";
import EditModeMessage from "@/features/chat/components/message/message-options/EditModeMessage.tsx";
import {Label} from "@/shared/components/ui/label.tsx";
import {Input} from "@/shared/components/ui/input.tsx";

export default function EditMessageForm({message, newMessage, setNewMessage, createdAt}: {message: string, newMessage: string, setNewMessage: (message: string) => void, createdAt: string}) {
    return (
        <div className='flex flex-col gap-8 mt-4'>
            <div className='flex flex-col'>
                        <span className="text-black text-sm font-semibold mb-2 dark:text-white">
                            Current Message
                        </span>
                <Card className='w-full flex items-center justify-center p-0'>
                    <CardContent className='p-6'>
                        <EditModeMessage
                            message={message}
                            createdAt={createdAt}
                        />
                    </CardContent>
                </Card>
            </div>

            <div>
                <Label htmlFor='new-message' className="text-black font-semibold mb-2 dark:text-white">
                    New Message
                </Label>
                <Input
                    type="text"
                    id="new-message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                        e.stopPropagation();
                    }}
                />

            </div>
        </div>
    );
}