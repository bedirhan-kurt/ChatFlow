import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button.tsx";
import {auth} from "../lib/firebaseConfig.ts";
import {useAuthState, useSignInWithGoogle} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router";


export default function SignIn() {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user, error] = useAuthState(auth);
    const navigate = useNavigate();

    async function handleGoogleSignIn(): Promise<void> {
        await signInWithGoogle().then(r => console.log(r));
        console.log(user, error)
        navigate("/application");
    }

    return (
        <Card className="w-96">
            <CardHeader className="flex flex-col gap-4">
                <CardTitle>Chat App</CardTitle>
                <CardDescription>
                    This is a chat application. You can sign in with your Google account and chat with other users.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={handleGoogleSignIn}>Sign in with Goggle</Button>
            </CardContent>
        </Card>
    )
}