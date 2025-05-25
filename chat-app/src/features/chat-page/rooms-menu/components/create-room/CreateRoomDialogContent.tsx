import { UseFormReturn } from "react-hook-form";
import { Input } from "@/shared/components/ui/input";
import { Switch } from "@/shared/components/ui/switch";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/shared/components/ui/form";

type Props = {
    form: UseFormReturn<{
        roomName: string;
        canEveryoneJoin?: boolean;
    }>;
};

export function CreateRoomDialogContent({ form }: Props) {
    return (
        <div className="w-full flex flex-col gap-4">
            {/* Room Name input */}
            <FormField
                control={form.control}
                name="roomName"
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

            {/* Switch for canEveryoneJoin */}
            <FormField
                control={form.control}
                name="canEveryoneJoin"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm">
                        <div className="space-y-0.5">
                            <FormLabel htmlFor="canEveryoneJoin">Everyone can join</FormLabel>
                            <FormMessage />
                        </div>
                        <FormControl>
                            <Switch
                                id="canEveryoneJoin"
                                checked={field.value ?? false}
                                onCheckedChange={field.onChange}
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
        </div>
    );
}
