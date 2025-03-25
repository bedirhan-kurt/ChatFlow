import {
    Card,
    CardContent,
    CardDescription, CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Send} from "lucide-react";
import {useAuthState, useSignOut} from "react-firebase-hooks/auth";
import {auth} from "@/lib/firebaseConfig.ts";
import {useNavigate} from "react-router";
//import MessageList from "@/components/MessageList.tsx";
import Message from "@/components/Message.tsx";
import { Separator } from "@/components/ui/separator"

export default function Application() {
    const [user] = useAuthState(auth);
    const [signOut, loading] = useSignOut(auth);
    const navigate = useNavigate();

    if (!user) {
        navigate("/");
        return
    }

    function handleSignOut(): void {
        signOut().catch(console.error);
    }

    return (
        <Card className="w-164 h-full flex flex-col p-8 justify-between">
            <CardHeader className="p-0 flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <CardTitle className="text-xl">Chat App</CardTitle>
                    <CardDescription>
                        Here is a public chat room. You can chat with other users.
                    </CardDescription>
                </div>
                <Button variant="secondary" onClick={handleSignOut}>{loading ? "..." : "Sing Out"}</Button>
            </CardHeader>
            <Separator></Separator>
            <CardContent className="py-2 px-0 flex flex-col gap-6 overflow-y-auto flex-grow">
                {/*<MessageList></MessageList>*/}
                <Message message={"So, what are you guys doing this weekend? I feel like I need a break from everything."}  owner={"User 1"}/>
                <Message message={"Same here! I was thinking of going to that new café downtown. They have amazing pastries."}  owner={"User 2"}/>
                <Message message={"No worries. As long as I get my coffee, I’m happy."} owner={"User 3"} />
                <Message message={"Alright, it’s a plan then! Looking forward to it."} owner={"User 4"} isOwned={true}/>
            </CardContent>
            <CardFooter className="p-0 flex gap-4">
                <Textarea placeholder="Type your message..." className="resize-none h-8"></Textarea>
                <Button className="w-16 h-full"><Send className="size-5" /></Button>
            </CardFooter>
        </Card>
    )
}