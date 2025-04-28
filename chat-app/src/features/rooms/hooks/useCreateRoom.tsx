import {createContext, useContext, useState, ReactNode} from 'react';
import addNewRoom from "@/features/rooms/api/addNewRoom.ts";
import {useUser} from "@/features/users/hooks/useUser.tsx";

interface RoomContextType {
    roomCode: string | "";
    handleCreateRoom: () => void;
}

const RoomContext = createContext<RoomContextType | undefined>(undefined);

export const RoomContextProvider = ({children}: { children: ReactNode }) => {
    const [roomCode, setRoomCode] = useState<string | "">("");
    const {user, username} = useUser();

    const handleCreateRoom = async () => {
        try {
            const newRoomCode = await addNewRoom({user, username});
            setRoomCode(newRoomCode); // Save the document ID
        } catch (error) {
            console.error(error); // Log the error or handle it appropriately
        }
    };

    return (
        <RoomContext.Provider value={
            {
                handleCreateRoom, roomCode
            }
        }>
            {
                children
            }
        </RoomContext.Provider>
    )
        ;
};

export const useCreateRoom = (): RoomContextType => {
    const context = useContext(RoomContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};
