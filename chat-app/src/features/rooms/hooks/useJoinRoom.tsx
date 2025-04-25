import {useState, useRef} from "react";

export function useJoinRoom() {
    const [roomCode, setRoomCode] = useState<string>("");
    const roomCodeRef = useRef<string>("");

    function handleCodeChange(newCode: string) {
        setRoomCode(newCode);
        console.log(roomCodeRef.current);
    }

    return {
        roomCode,
        handleCodeChange,
    };
}