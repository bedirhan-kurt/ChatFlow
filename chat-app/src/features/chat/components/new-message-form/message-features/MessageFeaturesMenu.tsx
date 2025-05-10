import CustomEmojiPicker from "@/features/chat/components/new-message-form/message-features/feature-components/CustomEmojiPicker.tsx";
import AddImageToggle from "@/features/chat/components/new-message-form/message-features/feature-components/AddImageButton.tsx";
import AddAttachmentButton from "@/features/chat/components/new-message-form/message-features/feature-components/AddAttachmentButton.tsx";

export default function MessageFeaturesMenu({appendToMessage}: { appendToMessage: (text: string) => void }) {
    return (
        <div className='w-full flex items-center justify-start gap-2'>
            <CustomEmojiPicker appendToMessage={appendToMessage}/>
            <AddImageToggle></AddImageToggle>
            <AddAttachmentButton></AddAttachmentButton>
        </div>
    );
}