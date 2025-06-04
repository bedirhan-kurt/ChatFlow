import {Switch} from "@/shared/components/ui/switch.tsx";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/components/ui/form.tsx";
import {Input} from "@/shared/components/ui/input.tsx";

export function StepSettings({form}: any) {
    const watchPasswordProtection = form.watch("passwordProtection");

    return (
        <div className="flex flex-col gap-4">
            <FormField
                control={form.control}
                name="canEveryoneJoin"
                render={({field}) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                            <FormLabel htmlFor="canEveryoneJoin">Everyone can join</FormLabel>
                            <FormMessage/>
                        </div>
                        <FormControl>
                            <Switch id="canEveryoneJoin" checked={field.value ?? false}
                                    onCheckedChange={field.onChange}/>
                        </FormControl>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="passwordProtection"
                render={({field}) => (
                    <FormItem className="flex flex-col gap-4 items-center justify-between rounded-lg border p-4">
                        <div className="w-full flex items-center justify-between">
                            <div className="space-y-0.5">
                                <FormLabel htmlFor="passwordProtection">Password Protection</FormLabel>
                                <FormMessage/>
                            </div>
                            <FormControl>
                                <Switch id="passwordProtection" checked={field.value ?? false}
                                        onCheckedChange={field.onChange}/>
                            </FormControl>
                        </div>

                        {watchPasswordProtection && (
                            <FormField
                                control={form.control}
                                name="password"
                                render={({field}) => (
                                    <FormItem className="w-full mb-0">
                                        <FormControl>
                                            <Input type="password" placeholder="Enter room password" {...field} />
                                        </FormControl>
                                        <FormMessage/>
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