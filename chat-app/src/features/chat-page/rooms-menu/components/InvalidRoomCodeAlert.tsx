import Alert from "@/shared/components/Alert.tsx";

export default function InvalidRoomCodeAlert() {
    return (
        <Alert
            title="Invalid room code"
            description="The room code you entered is invalid. Please check the code and try again."
            className="break-words"
        />
    );
};