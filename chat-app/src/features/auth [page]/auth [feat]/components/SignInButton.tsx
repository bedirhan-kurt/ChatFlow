import {Button} from "@/shared/components/ui/button.tsx";
import {useSignIn} from "@/features/auth [page]/auth [feat]/hooks/useSignIn.ts";

export default function SignInButton() {
    const {handleGoogleSignIn} = useSignIn();

    return (
        <Button
            className='w-full'
            onClick={handleGoogleSignIn}
        >
            Sign in with Google
        </Button>
    );
}