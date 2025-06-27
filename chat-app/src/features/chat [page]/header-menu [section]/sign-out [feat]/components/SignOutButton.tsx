import { Button } from "@/shared/components/ui/button";
import { LogOut } from "lucide-react";
import {signOut} from "firebase/auth";
import { auth } from "@/shared/api/firebaseConfig";

export default function SignOutButton() {
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Signed out.");
            })
            .catch((error) => {
                console.error("Error while signing out:", error);
            });
    }

    return (
        <Button variant="outline" size="icon" onClick={handleSignOut}>
            <LogOut></LogOut>
        </Button>
    )
}