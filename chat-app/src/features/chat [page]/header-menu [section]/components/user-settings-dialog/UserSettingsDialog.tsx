"use client";
import Dialog from "@/shared/components/Dialog.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {User} from "lucide-react";
import {useUser} from "@/features/chat [page]/hooks [core]/useUser.tsx";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/shared/components/ui/form.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/shared/components/ui/input.tsx";

// Responsible for manage states - will be transformed to shadcn/ui form
// Responsible for rendering UI

export default function UserSettingsDialog() {
    const {username, setUsername} = useUser();

    return (
        <>
            <Dialog
                trigger={<Button variant="outline"><User/></Button>}
                title="Edit profile"
                description="Make changes to your profile here. Click save when you're done."
                content={<UserSettingsForm currentUsername={username} setUsername={setUsername}></UserSettingsForm>}
                closeButton={false}
            />
        </>
    )
}

function UserSettingsForm({currentUsername, setUsername}: {currentUsername: string, setUsername: (username: string) => void}) {
    const formSchema = z.object({
        username: z
            .string()
            .min(1, { message: "This field is required" })
            .min(4, { message: "Must be at least 4 characters" }),
        profilePic: z.string().optional(),
        saveBtn: z.string().optional(),
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: currentUsername,
            profilePic: undefined,
            saveBtn: undefined,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    function onReset() {
        setUsername("fix this part")
        form.reset();
        form.clearErrors();
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                onReset={onReset}
                className="space-y-8 @container"
            >
                <div className="grid grid-cols-12 gap-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                                <FormLabel className="flex shrink-0">Username</FormLabel>

                                <div className="w-full">
                                    <FormControl>
                                        <Input
                                            key="text-input-0"
                                            placeholder=""
                                            type="text"
                                            id="username"
                                            className=""
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="profilePic"
                        render={({ field }) => (
                            <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                                <FormLabel className="flex shrink-0">Profile Pic.</FormLabel>

                                <div className="w-full">
                                    <FormControl>
                                        <Input
                                            key="file-input-0"
                                            placeholder=""
                                            type="file"
                                            id="profilePic"
                                            className=""
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="saveBtn"
                        render={() => (
                            <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                                <FormLabel className="hidden shrink-0">Submit</FormLabel>

                                <div className="w-full">
                                    <FormControl>
                                        <Button
                                            key="button-0"
                                            id="saveBtn"
                                            name=""
                                            className="w-full"
                                            type="submit"
                                            variant="default"
                                        >
                                            Save
                                        </Button>
                                    </FormControl>

                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    );
}
