import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/components/ui/form.tsx";
import {Switch} from "@/shared/components/ui/switch.tsx";
import {Input} from "@/shared/components/ui/input.tsx";

export function StepLimits({ form }: any) {
    const watchLimitUsers = form.watch("limitUsers");
    const watchExpiryEnabled = form.watch("expiryEnabled");

    return (
        <div className="flex flex-col gap-4">
            <FormField
                control={form.control}
                name="limitUsers"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-4 items-center justify-between rounded-lg border p-4">
                        <div className="w-full flex items-center justify-between">
                            <div className="space-y-0.5">
                                <FormLabel htmlFor="limitUsers">Limit number of users</FormLabel>
                                <FormMessage />
                            </div>
                            <FormControl>
                                <Switch id="limitUsers" checked={field.value ?? false} onCheckedChange={field.onChange} />
                            </FormControl>
                        </div>

                        {watchLimitUsers && (
                            <FormField
                                control={form.control}
                                name="maxMembers"
                                render={({ field }) => (
                                    <FormItem className="w-full mb-0">
                                        <FormControl>
                                            <Input placeholder="Max members, e.g. 20" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="expiryEnabled"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-4 items-center justify-between rounded-lg border p-4">
                        <div className="w-full flex items-center justify-between">
                            <div className="space-y-0.5">
                                <FormLabel htmlFor="expiryEnabled">Enable Expiry Date</FormLabel>
                                <FormMessage />
                            </div>
                            <FormControl>
                                <Switch id="expiryEnabled" checked={field.value ?? false} onCheckedChange={field.onChange} />
                            </FormControl>
                        </div>

                        {watchExpiryEnabled && (
                            <FormField
                                control={form.control}
                                name="expiryDate"
                                render={({ field }) => (
                                    <FormItem className="w-full mb-0">
                                        <FormControl>
                                            <Input type="datetime-local" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                    </FormItem>
                )}
            />
        </div>
    );
}