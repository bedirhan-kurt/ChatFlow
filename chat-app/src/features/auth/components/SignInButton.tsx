import {Button} from "@/shared/components/ui/button.tsx";
import {signInWithGoogle} from "../api/signInWithGoogle.ts";
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
        const user = await signInWithGoogle();
        if (user) {
            navigate("/rooms");
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