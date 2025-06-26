import {useContext} from "react";
import {
    ScrollToSearchedContext
} from "@/features/chat [page]/header-menu [section]/search-message [feat]/context/ScrollToSearchedContext.tsx";

export default function useScrollToSearchedMessage() {
    const context = useContext(ScrollToSearchedContext);
    if (context === undefined) {
        throw new Error("useScrollToSearchedMessage must be used within a ScrollToSearchedContext");
    }
    return context;
}