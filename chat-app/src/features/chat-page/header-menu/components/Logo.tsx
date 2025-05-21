import ChatFlowLogo from "@/features/chat-page/header-menu/assets/ChatFlowLogo.png";

export default function Logo() {
    return (
        <div className="flex items-center gap-1">
          <img
              src={ChatFlowLogo}
              alt="Logo"
              className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-semibold">ChatFlow</span>
        </div>
    );
};