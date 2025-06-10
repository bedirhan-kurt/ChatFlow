import { useContext } from "react";
import UserContext from "@/features/chat [page]/[page-core]/context [core]/UserContext.tsx";

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}