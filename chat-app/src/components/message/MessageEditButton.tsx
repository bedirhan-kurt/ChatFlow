import { Pencil } from "lucide-react";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import EditModeMessage from "@/components/message/EditModeMessage.tsx";
import {updateMessage} from "@/api/editMessage.ts";
import {Separator} from "@/components/ui/separator.tsx";

export default function MessageEditButton({ id, message, createdAt }: { id: string, message: string, createdAt: string }) {
    const [newMessage, setNewMessage] = useState<string>(message || "");


    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-full size-4 flex gap-2 items-center">
                <Pencil className="size-3" />
                <span>Edit</span>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Edit Message
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        You can preview the current message and write a new one below.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <Separator />

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
                            id='new-message'
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault(); // Sadece Enter tuşunu engelle
                                }
                            }}
                        />
                    </div>
                </div>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => updateMessage(id, newMessage)}>
                        Save
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
