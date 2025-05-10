import Alert from "@/shared/components/Alert";
import useRoomNavigation from "@/features/rooms/hooks/useRoomNavigation.ts";
import {useParams} from "react-router";

export default function InvalidRoomCodeAlert() {
    const {isRoomExisting} = useRoomNavigation();
    const {roomCode} = useParams()

    if (!roomCode) {
        return null;
    }

    return (
        <>
            {(isRoomExisting === false) && (roomCode.length === 9) ?
                <Alert
                    title="Invalid room code"
                    description="The room code you entered is invalid. Please check the code and try again."
                    className="break-words"
                />
                : null}
        </>
    );
};