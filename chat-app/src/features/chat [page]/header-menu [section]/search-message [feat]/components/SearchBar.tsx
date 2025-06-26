import {Input} from "@/shared/components/ui/input.tsx";
import { Search } from "lucide-react";
import { cn } from "@/shared/lib/utils/cn.ts";
import useSearchMessage
    from "@/features/chat [page]/header-menu [section]/search-message [feat]/hooks/useSearchMessage.tsx";
import FilteredMessagesList
    from "@/features/chat [page]/header-menu [section]/search-message [feat]/components/FilteredMessagesList.tsx";

export default function SearchBar() {
    const { searchMessage, handleSearchMessageChange } = useSearchMessage();

    return (
            <div className="relative w-3/5">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search message..."
                    className={cn(
                        "w-full bg-background pl-9",
                        "focus-visible:ring-offset-0"
                    )}
                    onChange={handleSearchMessageChange}
                    value={searchMessage}
                />
                <FilteredMessagesList className={`${!searchMessage ? 'hidden' : 'visible'}`}></FilteredMessagesList>
            </div>
    )
}
