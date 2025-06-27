import Alert from "@/shared/components/Alert.tsx";

export default function InvalidRoomCodeAlert() {
    return (
        <Alert
            title="Invalid room code"
            description="The room code you entered is invalid."
            className="bg-red-50 break-words"
        />
    );
};