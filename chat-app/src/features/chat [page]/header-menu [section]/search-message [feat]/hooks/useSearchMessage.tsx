import {useContext} from "react";
import { SearchMessageContext } from "../context/SearchMessageContext";

export default function useSearchMessage() {
    const context = useContext(SearchMessageContext);
    if (context === undefined) {
        throw new Error("useSearchMessage must be used within a SearchMessageProvider");
    }
    return context;
}