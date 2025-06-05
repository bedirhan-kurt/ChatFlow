import { createContext, useCallback, useContext, useState } from "react";
import checkRoomExistence from "@/features/chat [page]/rooms-menu [section]/api/join-room/checkRoomExistence.ts";
import { formatRoomCode } from "@/features/rooms [page]/rooms/lib/utils.ts";

type RoomValidationContextType = {
    isRoomExisting: boolean | null;
    setIsRoomExisting: (value: boolean | null) => void;
    validateRoomCode: (roomCode: string) => string | null;
    checkRoom: (roomCode: string) => Promise<string | null>;
};

const RoomValidationContext = createContext<RoomValidationContextType | undefined>(undefined);

export const RoomValidationProvider = ({ children }: { children: React.ReactNode }) => {
    const [isRoomExisting, setIsRoomExisting] = useState<boolean | null>(null);

    const validateRoomCode = useCallback((roomCode: string): string | null => {
        if (roomCode.length === 9 && /^\d{9}$/.test(roomCode)) {
            try {
                return formatRoomCode(roomCode);
            } catch (error) {
                console.error("Invalid room code format:", error);
                return null;
            }
        }
        return null;
    }, []);

    const checkRoom = useCallback(async (roomCode: string): Promise<string | null> => {
        const formattedCode = validateRoomCode(roomCode);
        if (!formattedCode) {
            setIsRoomExisting(false);
            return null;
        }

        const exists = await checkRoomExistence(formattedCode);
        setIsRoomExisting(exists);
        return exists ? formattedCode : null;
    }, [validateRoomCode]);

    return (
        <RoomValidationContext.Provider
            value={{
            isRoomExisting,
            setIsRoomExisting,
            validateRoomCode,
            checkRoom
    }}
>
    {children}
    </RoomValidationContext.Provider>
);
};

export const useRoomValidation = () => {
    const context = useContext(RoomValidationContext);
    if (context === undefined) {
        throw new Error("useRoomValidation must be used within a RoomValidationProvider");
    }
    return context;
};