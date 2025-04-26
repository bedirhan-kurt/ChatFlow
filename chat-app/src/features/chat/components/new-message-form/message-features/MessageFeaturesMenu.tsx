import CustomEmojiPicker from "@/features/chat/components/new-message-form/message-features/feature-components/CustomEmojiPicker.tsx";
import AddImageToggle from "@/features/chat/components/new-message-form/message-features/feature-components/AddImageToggle.tsx";
import AddAttachmentToggle from "@/features/chat/components/new-message-form/message-features/feature-components/AddAttachmentToggle.tsx";

export default function MessageFeaturesMenu({appendToMessage}: { appendToMessage: (text: string) => void }) {
    return (
        <div className='w-full flex items-center justify-start gap-2'>
            <CustomEmojiPicker appendToMessage={appendToMessage}/>
            <AddImageToggle></AddImageToggle>
            <AddAttachmentToggle></AddAttachmentToggle>
        </div>
    );
}