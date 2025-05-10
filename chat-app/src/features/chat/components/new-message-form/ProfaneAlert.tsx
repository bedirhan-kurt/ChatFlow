import Alert from "@/shared/components/Alert.tsx";
import {useProfanityCheck} from "@/features/chat/hooks/useProfanityCheck.ts";
import {useEffect} from "react";

/**
 * ProfaneAlert Component
 *
 * Responsibility:
 * This component renders an alert message when the user types profane content
 * in the chat input. It provides a warning to encourage polite language in the
 * public chat room.
 *
 * Features:
 * - Displays a destructive alert with a warning icon, title, and description.
 * - Dynamically shows or hides the alert based on the `isProfane` state.
 *
 * Hooks:
 * - `useSendMessage`: Custom hook to access the `isProfane` state.
 *
 * @component
 * @returns {TSX.Element | null} The rendered ProfaneAlert component or null if no profanity is detected.
 */

export default function ProfaneAlert({messageContent}: { messageContent: string }) {
    const {checkProfanity, isProfane} = useProfanityCheck()

    useEffect(() => {
        checkProfanity(messageContent)
    }, [messageContent, checkProfanity])

    return (
        <div>
            {isProfane ?
                <Alert
                    title="Don't use profane content"
                    description="Please avoid using profane language in the public chat room."
                    className="break-words"
                />
                : null
            }
        </div>
    );
}
