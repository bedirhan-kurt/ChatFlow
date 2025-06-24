// import ChatFlowLogo from "@/features/chat [page]/header-menu [section]/[section-core]/assets/ChatFlowLogo.png";
import BetaTag from "@/shared/components/BetaTag.tsx";
import { Linkedin, Github } from "lucide-react";

export default function Logo() {
    return (
        <div className="w-2/8 flex gap-2 items-center justify-between border-r h-full px-6">
            <div className="flex items-center gap-2">
                {/*<img
                    src={ChatFlowLogo}
                    alt="Logo"
                    className="w-10 h-10 rounded-full"
                />*/}
                <span className="text-lg font-semibold">ChatFlow</span>
                <BetaTag />
            </div>
            <div className="flex items-center gap-2">
                <div className="w-full flex items-center gap-2 ml-2">
                    <a href="https://www.linkedin.com/in/bedirhan-kurt/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                        <Linkedin size={18} />
                    </a>
                    <a href="https://github.com/bedirhan-kurt" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                        <Github size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};
