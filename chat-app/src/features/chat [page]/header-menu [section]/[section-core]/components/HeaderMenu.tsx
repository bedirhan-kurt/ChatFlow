import Logo from "@/features/chat [page]/header-menu [section]/[section-core]/components/Logo.tsx";
import NotificationsPopover from "@/features/chat [page]/header-menu [section]/notifications [feat]/NotificationsPopover.tsx";
import {ModeToggle} from "@/features/chat [page]/header-menu [section]/dark-mode [feat]/components/mode-toggle.tsx";
import SelfProfileCard
    from "@/features/chat [page]/header-menu [section]/user-settings [feat]/components/SelfProfileCard.tsx";

export default function HeaderMenu({ className }: { className?: string }) {
    return (
        <header className={className}>
            <Logo></Logo>
            <div className="w-6/8 px-4 flex items-center justify-between">
                <ModeToggle />
                <div className="flex gap-4 items-center h-full px-6 py-4">
                    <NotificationsPopover />
                    <SelfProfileCard />
                </div>
            </div>
        </header>
    );
}