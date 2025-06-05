import BetaTag from "@/shared/components/BetaTag";
import SelfProfileCard from "@/features/chat [page]/header-menu [section]/components/user-settings-dialog/SelfProfileCard.tsx";
import { ModeToggle } from "@/features/chat [page]/header-menu [section]/components/dark-mode/mode-toggle";
import Logo from "@/features/chat [page]/header-menu [section]/components/Logo.tsx";
import NotificationsPopover from "@/features/chat [page]/notifications [section]/NotificationsPopover.tsx";

export default function HeaderMenu({ className }: { className?: string }) {
    return (
        <header className={className}>
            <div className="flex gap-4 items-center h-full justify-center">
                <Logo></Logo>
                <BetaTag />
                <ModeToggle />
            </div>
            <div className="flex gap-4 items-center h-full">
                <NotificationsPopover />
                <SelfProfileCard />
            </div>
        </header>
    );
}