import {useNavigate} from "react-router";
import {signInWithGoogle} from "@/features/auth-page/auth/api/signInWithGoogle.ts";


export function useSignIn() {
    const navigate = useNavigate();

    async function handleGoogleSignIn(): Promise<void> {
        const user = await signInWithGoogle();
        if (user) {
            navigate("/rooms");
        }
    }

    return {
        handleGoogleSignIn,
    };
}