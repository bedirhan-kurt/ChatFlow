// import ChatFlowLogo from "@/features/chat [page]/header-menu [section]/[section-core]/assets/ChatFlowLogo.png";
import BetaTag from "@/shared/components/BetaTag.tsx";

export default function Logo() {
    return (
        <div className="w-2/8 flex gap-2 items-center border-r h-full px-6">
            <div className="flex items-center gap-0">
                {/*<img
                    src={ChatFlowLogo}
                    alt="Logo"
                    className="w-10 h-10 rounded-full"
                />*/}
                <span className="text-lg font-semibold">ChatFlow</span>
            </div>
            <BetaTag />
        </div>
    );
};