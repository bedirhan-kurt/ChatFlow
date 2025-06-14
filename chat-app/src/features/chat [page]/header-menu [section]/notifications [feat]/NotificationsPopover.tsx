import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/shared/components/ui/card.tsx";
import {Bell, Check} from "lucide-react"
import {cn} from "@/shared/lib/utils/cn.ts";
import {Button} from "@/shared/components/ui/button.tsx";
import React from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/shared/components/ui/popover.tsx";

export default function NotificationsPopover() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon"><Bell /></Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" asChild={true}>
                <NotificationsCardContent />
            </PopoverContent>
        </Popover>
    );
};

const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
]

type CardProps = React.ComponentProps<typeof Card>

function NotificationsCardContent({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-80", className)} {...props}>
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div>
                    {notifications.map((notification, index) => (
                        <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {notification.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {notification.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    <Check /> Mark all as read
                </Button>
            </CardFooter>
        </Card>
    )
}
