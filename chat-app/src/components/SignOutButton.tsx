import {useSignOut} from "react-firebase-hooks/auth";
import {auth} from "@/api/firebaseConfig.ts";
import {Button} from "@/components/ui/button.tsx";

export default function SignOutButton() {
    const [signOut, loading] = useSignOut(auth);

    function handleSignOut(): void {
        signOut().catch(console.error);
    }

    return (
        <Button variant="secondary" onClick={handleSignOut}>
            {loading ? "..." : "Sign Out"}
        </Button>
    );
};