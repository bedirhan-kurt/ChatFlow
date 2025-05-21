import MessageBoard from "@/features/chat-page/chat-area/components/board-content/MessageBoard.tsx";
// import Scroller from "@/features/chat-area/components/new-message-form/Scroller.tsx";
import NewMessageForm from "@/features/chat-page/chat-area/components/new-message-form/NewMessageForm.tsx";

export default function ChatArea({className}: { className?: string }) {
    return (
        <div className={className}>
          <MessageBoard/>
          <NewMessageForm/>
        </div>
    );
};