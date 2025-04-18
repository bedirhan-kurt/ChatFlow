import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";
import {AlertCircle} from "lucide-react";
import {useSendMessage} from "@/hooks/useSendMessage.tsx";

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

export default function ProfaneAlert() {
    const {isProfane} = useSendMessage()

    return (
        <div>
            {isProfane ?
                <Alert variant='destructive' className='border-red-500'>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Be polite!</AlertTitle>
                    <AlertDescription>
                        Here is a public chat room. Use a polite language and avoid bad words.
                    </AlertDescription>
                </Alert>
                : null
            }
        </div>
    );
}