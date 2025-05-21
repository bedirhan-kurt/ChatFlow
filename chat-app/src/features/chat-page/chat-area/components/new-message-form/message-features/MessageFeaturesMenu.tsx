import CustomEmojiPicker from "@/features/chat-page/chat-area/components/new-message-form/message-features/feature-components/CustomEmojiPicker.tsx";
import AddImageToggle from "@/features/chat-page/chat-area/components/new-message-form/message-features/feature-components/AddImageButton.tsx";
import AddAttachmentButton from "@/features/chat-page/chat-area/components/new-message-form/message-features/feature-components/AddAttachmentButton.tsx";
import AiMessagingButton
    from "@/features/chat-page/chat-area/components/new-message-form/message-features/feature-components/AiMessagingButton.tsx";

export default function MessageFeaturesMenu({appendToMessage}: { appendToMessage: (text: string) => void }) {
    return (
        <div className='w-full flex items-center justify-start gap-2'>
            <CustomEmojiPicker appendToMessage={appendToMessage}/>
            <AddImageToggle></AddImageToggle>
            <AddAttachmentButton></AddAttachmentButton>
            <AiMessagingButton></AiMessagingButton>
        </div>
    );
}