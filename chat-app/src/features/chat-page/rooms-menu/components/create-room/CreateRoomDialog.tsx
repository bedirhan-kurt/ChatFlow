import { useParams } from "react-router";
import Dialog from "@/shared/components/Dialog.tsx";
import { Button } from "@/shared/components/ui/button.tsx";
import { Plus } from "lucide-react";
import { CreateRoomDialogContent } from "@/features/chat-page/rooms-menu/components/create-room/CreateRoomDialogContent.tsx";
import { useCreateRoom } from "@/features/chat-page/rooms-menu/hooks/useCreateRoom.tsx";
import {FormProvider, useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    roomName: z.string().min(1, "Room name is required"),
    canEveryoneJoin: z.boolean().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function CreateRoomDialog() {
    const { userId } = useParams();
    const { createRoom } = useCreateRoom();

    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            roomName: "",
            canEveryoneJoin: false,
        },
    });

    if (!userId) return null;

    const onSubmit = async (values: FormValues) => {
        const result = await createRoom(values);
        if (result.error) {
            console.error(result.error);
        } else {
            console.log(`Room created with code: ${result.roomCode}`);
        }
    };

    return (
        <Dialog
            trigger={
                <Button className="flex items-center gap-2">
                    <span>Create Room</span>
                    <Plus size={18} />
                </Button>
            }
            title="Create a room"
            description="Start a new chat room with your friends."
            content={
                <FormProvider {...form}>
                    <CreateRoomDialogContent form={form} />
                </FormProvider>}
            actionButton={<Button onClick={form.handleSubmit(onSubmit)}>Create</Button>}
        />
    );
}
