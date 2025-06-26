import Logo from "@/features/chat [page]/header-menu [section]/[section-core]/components/Logo.tsx";
import {ModeToggle} from "@/features/chat [page]/header-menu [section]/dark-mode [feat]/components/mode-toggle.tsx";
import SelfProfileCard
    from "@/features/chat [page]/header-menu [section]/user-settings [feat]/components/SelfProfileCard.tsx";
import {useUser} from "@/features/chat [page]/[page-core]/hooks [core]/useUser.tsx";
import SearchBar from "@/features/chat [page]/header-menu [section]/search-message [feat]/components/SearchBar.tsx";
import {
    SearchMessageProvider
} from "@/features/chat [page]/header-menu [section]/search-message [feat]/context/SearchMessageContext.tsx";

export default function HeaderMenu({ className }: { className?: string }) {
    const {user, username} = useUser();

    return (
        <header className={`${className}`}>
            <Logo></Logo>
            <div className="w-4/8 px-4 py-4 flex items-center justify-between border-r h-full">
                <SearchMessageProvider>
                    <SearchBar />
                </SearchMessageProvider>
            </div>
            <div className="w-2/8 px-4 py-4 flex items-center justify-between">
                    <ModeToggle />
                    <SelfProfileCard username={username} email={user.email} />
            </div>
        </header>
    );
}