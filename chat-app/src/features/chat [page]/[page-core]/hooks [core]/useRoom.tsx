import { useContext } from "react";
import RoomContext from "@/features/chat [page]/[page-core]/context [core]/RoomContext.tsx";

export function useRoom() {
    const context = useContext(RoomContext);
    if (!context) {
        throw new Error("useRoom must be used within a RoomProvider!");
    }
    return context;
}