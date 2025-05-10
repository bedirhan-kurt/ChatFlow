import Alert from "@/shared/components/Alert";
import {useRoomValidation} from "@/features/rooms/hooks/useRoomValidation.tsx";

export default function InvalidRoomCodeAlert({joinRoomCode}: {joinRoomCode: string}) {
    const {isRoomExisting} = useRoomValidation();

    if (!joinRoomCode) {
        return null;
    }

    return (
        <>
            {(isRoomExisting === false) && (joinRoomCode.length === 9) ?
                <Alert
                    title="Invalid room code"
                    description="The room code you entered is invalid. Please check the code and try again."
                    className="break-words"
                />
                : null}
        </>
    );
};