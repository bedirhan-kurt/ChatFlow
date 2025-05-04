import {Alert, AlertDescription, AlertTitle} from "@/shared/components/ui/alert.tsx";
import {AlertCircle} from "lucide-react";

export default function InvalidRoomCodeAlert() {
    return (
        <div>
            <Alert variant='destructive' className='border-red-500'>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>The code is invalid!</AlertTitle>
                <AlertDescription>
                    Please check the code and try again.
                </AlertDescription>
            </Alert>
        </div>
    );
};