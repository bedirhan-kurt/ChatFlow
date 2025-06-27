/**
 * SignIn Component
 *
 * Responsibility:
 * Responsible for rendering the sign-in page's user interface.
 * This components provides a card layout with a title, description, and a button
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
 * @components
 * @returns {TSX.Element} The rendered SignIn components.
 */

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/shared/components/ui/card.tsx"
import SignInButton from "@/features/auth [page]/auth [feat]/components/SignInButton.tsx";
import Disclaimer from "@/features/auth [page]/auth [feat]/components/Disclaimer.tsx";

export default function SignIn() {
    return (
        <div className='w-96 flex flex-col gap-2'>
            <Card>
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
            <Disclaimer></Disclaimer>
        </div>
    )
}