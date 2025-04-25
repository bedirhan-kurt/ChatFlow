/**
 * SignIn Component
 *
 * Responsibility:
 * Responsible for rendering the sign-in page's user interface.
 * This component provides a card layout with a title, description, and a button
 * to initiate the Google sign-in process.
 *
 * Features:
 * - Displays the application title and a brief description.
 * - Includes a button to sign in with a Google account.
 *
 * Dependencies:
 * - `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle` from the UI components for layout.
 * - `SignInButton` for handling the Google sign-in functionality.
 *
 * @component
 * @returns {TSX.Element} The rendered SignIn component.
 */

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/shared/components/ui/card.tsx"
import SignInButton from "@/features/auth/components/SignInButton.tsx";

export default function SignIn() {
    return (
        <Card className="w-96">
            <CardHeader className="flex flex-col gap-4">
                <CardTitle>Chat App</CardTitle>
                <CardDescription>
                    This is a chat application. You can sign in with your Google account and chat with other users.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <SignInButton />
            </CardContent>
        </Card>
    )
}