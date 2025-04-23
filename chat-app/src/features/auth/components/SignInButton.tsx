import {Button} from "@/shared/components/ui/button.tsx";
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import {auth} from "@/shared/api/firebaseConfig.ts";
import {useNavigate} from "react-router";

/**
 * SignInButton Component
 *
 * Responsibility:
 * Responsible for signing in the user with Google.
 * This component provides a button that triggers the Google sign-in process
 * and navigates the user to the application page upon successful authentication.
 *
 * Features:
 * - Integrates with Firebase Authentication to handle Google sign-in.
 * - Redirects the user to the "/application" route after successful login.
 * - Displays a button labeled "Sign in with Google".
 *
 * Dependencies:
 * - `Button` from the UI components for rendering the button.
 * - `useSignInWithGoogle` from `react-firebase-hooks/auth` for Google sign-in functionality.
 * - `auth` from Firebase configuration for authentication.
 * - `useNavigate` from `react-router` for navigation.
 *
 * @component
 * @returns {TSX.Element} The rendered SignInButton component.
 */

export default function SignInButton() {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    /**
     * Handles the Google sign-in process.
     * On successful sign-in, logs the response and navigates to the application page.
     *
     * @async
     * @function handleGoogleSignIn
     * @returns {Promise<void>} A promise that resolves when the sign-in process is complete.
     */
    async function handleGoogleSignIn(): Promise<void> {
        const result = await signInWithGoogle();
        if (result?.user) {
            console.log(result);
            navigate("/application");
        }
    }

    return (
        <Button
            className='w-full'
            onClick={handleGoogleSignIn}
        >
            Sign in with Google
        </Button>
    );
}