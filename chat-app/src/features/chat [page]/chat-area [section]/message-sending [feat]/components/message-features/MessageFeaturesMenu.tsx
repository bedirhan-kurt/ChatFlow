import CustomEmojiPicker from "@/features/chat [page]/chat-area [section]/message-sending [feat]/components/message-features/feature-components/CustomEmojiPicker.tsx";

export default function MessageFeaturesMenu({appendToMessage}: { appendToMessage: (text: string) => void }) {
    return (
        <div className='flex items-center justify-start gap-2'>
            <CustomEmojiPicker appendToMessage={appendToMessage}/>
        </div>
    );
}