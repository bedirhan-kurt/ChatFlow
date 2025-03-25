import {Card, CardContent} from "@/components/ui/card.tsx";
//import {Avatar} from "@/components/ui/avatar.tsx";

export default function Message({ message, owner, isOwned = false }: { message: string, owner: string, isOwned?: boolean }) {
    return (
        <div className={`w-full flex flex-col gap-2 ${isOwned ? "items-end" : "items-start"}`}>
            <div className="flex gap-2 items-center">
                {/*<Avatar className="bg-gray-300"></Avatar>*/}
                <span className="font-medium">{isOwned ? "You" : owner}</span>
            </div>
            <Card className={`w-fit p-3 flex-col gap-2 text-sm ${isOwned ? "bg-primary-500 text-black" : "bg-gray-100"}`}>
                <CardContent className="p-0">
                    {message}
                </CardContent>
            </Card>
        </div>
    )
}