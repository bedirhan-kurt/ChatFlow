import {useSignOut} from "react-firebase-hooks/auth";
import {auth} from "@/shared/api/firebaseConfig.ts";
import {Button} from "@/shared/components/ui/button.tsx";

/**
 * SignOutButton Component
 *
 * Responsibility:
 * Responsible for signing out the user.
 * This component provides a button that triggers the sign-out process
 * and displays a loading state while the operation is in progress.
 *
 * Features:
 * - Integrates with Firebase Authentication to handle user sign-out.
 * - Displays a secondary-styled button labeled "Sign Out".
 * - Shows a loading indicator ("...") while the sign-out process is ongoing.
 *
 * Dependencies:
 * - `useSignOut` from `react-firebase-hooks/auth` for Firebase sign-out functionality.
 * - `auth` from Firebase configuration for authentication.
 * - `Button` from the UI components for rendering the button.
 *
 * @component
 * @returns {TSX.Element} The rendered SignOutButton component.
 */

export default function SignOutButton() {
    const [signOut, loading] = useSignOut(auth);

    /**
     * Handles the sign-out process.
     * Logs any errors that occur during the operation.
     *
     * @function handleSignOut
     * @returns {void}
     */
    function handleSignOut(): void {
        signOut().catch(console.error);
    }

    return (
        <Button variant="secondary" onClick={handleSignOut}>
            {loading ? "..." : "Sign Out"}
        </Button>
    );
};