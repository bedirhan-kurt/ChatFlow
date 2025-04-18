import {Button} from "@/components/ui/button.tsx";
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import {auth} from "@/api/firebaseConfig.ts";
import {useNavigate} from "react-router";

// Responsible for signing in the user with Google

export default function SignInButton() {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    async function handleGoogleSignIn(): Promise<void> {
        await signInWithGoogle().then(r => console.log(r));
        navigate("/application");
    }

    return (
        <Button onClick={handleGoogleSignIn}>Sign in with Goggle</Button>
    );
}