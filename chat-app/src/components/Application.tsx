import React, { useRef } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/api/firebaseConfig.ts";
import { useNavigate } from "react-router";
import { Separator } from "@/components/ui/separator";
import SendButton from "@/components/SendButton.tsx";
import MessageList from "@/components/MessageList.tsx";
import {ModeToggle} from "@/components/mode-toggle.tsx";

export default function Application() {
    const [user] = useAuthState(auth);
    const [signOut, loading] = useSignOut(auth);
    const navigate = useNavigate();
    const messageContentRef = useRef("");

    if (!user) {
        navigate("/");
        return null;
    }

    function handleSignOut(): void {
        signOut().catch(console.error);
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        messageContentRef.current = e.target.value;
    };

    return (
        <Card className="w-164 h-full flex flex-col p-8 justify-between">
            <CardHeader className="p-0 flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <CardTitle className="text-xl">Chat App</CardTitle>
                    <CardDescription>
                        Here is a public chat room. You can chat with other users.
                    </CardDescription>
                </div>
                <div className='flex gap-4'>
                    <Button variant="secondary" onClick={handleSignOut}>
                        {loading ? "..." : "Sign Out"}
                    </Button>
                    <ModeToggle></ModeToggle>
                </div>
            </CardHeader>
            <Separator />
            <CardContent className="py-2 px-0 flex flex-col gap-6 overflow-y-auto flex-grow">
                <MessageList ownerId={user.uid} />
            </CardContent>
            <CardFooter className="p-0 flex gap-4">
                <Textarea
                    placeholder="Type your message..."
                    className="resize-none h-8"
                    defaultValue={messageContentRef.current}
                    onChange={handleMessageChange}
                />
                <SendButton messageContentRef={messageContentRef} author={user.uid} />
            </CardFooter>
        </Card>
    );
}