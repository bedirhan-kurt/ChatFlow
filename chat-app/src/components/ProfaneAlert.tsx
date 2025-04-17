import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";
import {AlertCircle} from "lucide-react";
import {useSendMessage} from "@/hooks/useSendMessage.tsx";

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