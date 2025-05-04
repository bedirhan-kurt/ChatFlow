"use client";
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
import {auth} from "@/shared/api/firebaseConfig.ts";
import updateUsername from "@/features/users/api/updateUsername.ts";
import {DialogClose} from "@/shared/components/ui/dialog.tsx";
import React from "react";

export default function UserSettingsForm({currentUsername, setUsername}: {currentUsername: string, setUsername: React.Dispatch<React.SetStateAction<string>>}) {
    const formSchema = z.object({
        username: z
            .string()
            .min(1, { message: "This field is required" })
            .min(4, { message: "Must be at least 4 characters" }),
        saveBtn: z.string(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: currentUsername,
            saveBtn: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (auth.currentUser) {
            updateUsername(auth.currentUser.uid as string, values.username);
            setUsername(values.username);

        } else {
            console.error("No authenticated user found.");
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 @container"
            >
                <div className="grid grid-cols-12 gap-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className="col-span-12 col-start-auto flex flex-col gap-2 space-y-0 items-start">
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
                        name="saveBtn"
                        render={() => (
                            <FormItem className="col-span-12 col-start-auto flex flex-col gap-2 space-y-0 items-start">
                                <FormLabel className="hidden shrink-0">Submit</FormLabel>

                                <div className="w-full">
                                    <FormControl>
                                        <DialogClose
                                            type="submit"
                                            className="p-2 px-4 text-sm font-semibold rounded-lg bg-primary text-white dark:text-black dark:bg-white"
                                        >
                                            Save changes
                                        </DialogClose>
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
