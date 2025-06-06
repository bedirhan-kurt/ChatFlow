import {useNavigate} from "react-router";
import {signInWithGoogle} from "@/features/auth [page]/auth [feat]/api/signInWithGoogle.ts";


export function useSignIn() {
    const navigate = useNavigate();

    async function handleGoogleSignIn(): Promise<void> {
        const user = await signInWithGoogle();
        if (user) {
            navigate(`/app/${user.uid}`);
        }
    }

    return {
        handleGoogleSignIn,
    };
}