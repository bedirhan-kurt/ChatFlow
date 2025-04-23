import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/shared/components/ui/card.tsx"
import SignInButton from "@/features/auth/components/SignInButton.tsx";

// Responsible for rendering the sign-in pages UI

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