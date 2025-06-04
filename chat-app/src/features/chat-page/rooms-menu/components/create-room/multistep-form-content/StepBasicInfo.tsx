import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/shared/components/ui/form.tsx";
import { Input } from "@/shared/components/ui/input.tsx";

export function StepBasicInfo({ form }: any) {
    return (
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
        </div>
    );
}