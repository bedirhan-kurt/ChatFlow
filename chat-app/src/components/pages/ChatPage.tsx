import ApplicationLayout from "../layouts/ApplicationLayout.tsx";
import MessageList from "@/components/MessageList.tsx";
import MessageBar from "@/components/MessageBar.tsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/api/firebaseConfig.ts";
import { useRef, useState } from "react";

export default function ChatPage() {
    const [user] = useAuthState(auth);
    const [username, setUsername] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);

    return (
        <ApplicationLayout>
            <MessageList ownerId={user.uid} />
            <div ref={bottomRef} className="h-0"></div>
            <MessageBar uid={user.uid} authorUsername={username} bottomRef={bottomRef} />
        </ApplicationLayout>
    );
}