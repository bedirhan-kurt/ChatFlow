import { Button } from "@/shared/components/ui/button";
import { LogOut } from "lucide-react";
import {signOut} from "firebase/auth";
import {auth, db} from "@/shared/api/firebaseConfig";
import {useUser} from "@/features/chat [page]/[page-core]/hooks [core]/useUser.tsx";
import {doc, updateDoc} from "firebase/firestore";

export default function SignOutButton() {
    const {user} = useUser();
    const userRef = doc(db, "users", user.uid);

    const handleSignOut = () => {
        updateDoc(userRef, {
            isOnline: false,
        })
            .then(() => {
                console.log("User status updated to offline.");
            })
            .catch((error) => {
                console.error("Error updating user status:", error);
            });
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