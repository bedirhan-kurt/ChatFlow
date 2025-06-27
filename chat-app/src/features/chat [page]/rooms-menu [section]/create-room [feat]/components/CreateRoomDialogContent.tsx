import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { createRoomSchema } from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/components/form-content/formSchema.ts";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form.tsx";
import { Input } from "@/shared/components/ui/input.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {useState} from "react";
import useCreateRoom from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/hooks/useCreateRoom.tsx";
import SuccessScreen
    from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/components/form-content/SuccessScreen.tsx";

type FormValues = z.infer<typeof createRoomSchema>;

export default function CreateRoomDialogContent() {
    const [isRoomCreated, setIsRoomCreated] = useState(false);
    const [createdRoomCode, setCreatedRoomCode] = useState<string | null>(null);
    const { handleCreateRoom } = useCreateRoom();

    const form = useForm<FormValues>({
        resolver: zodResolver(createRoomSchema),
        defaultValues: {
            name: "",
            description: "",
        },
    });

    const onSubmit = async (values: FormValues) => {
        try {
            const result = await handleCreateRoom(values);

            if (result?.error) {
                console.error("Room creation error:", result.error);
            } else {
                setIsRoomCreated(true);
                if (result.createdRoomCode) {
                    form.reset();
                    setCreatedRoomCode(result.createdRoomCode);
                    console.log(`Room created with code: ${result.createdRoomCode}`);
                }
            }
        } catch (e) {
            console.error("Unexpected error:", e);
        }
    };

    return (
        <>
            {isRoomCreated ? (<SuccessScreen form={form} createdRoomCode={createdRoomCode} />) :
                <FormProvider {...form}>
                    <div className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Room Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Room Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Optional description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className='w-full flex justify-end'>
                            <Button onClick={() => form.handleSubmit(onSubmit)()}>Create</Button>
                        </div>
                    </div>
                </FormProvider>
            }
        </>
    );
}