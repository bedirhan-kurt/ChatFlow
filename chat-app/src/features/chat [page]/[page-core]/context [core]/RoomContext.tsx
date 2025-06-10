import React, {createContext} from "react";

interface RoomContextType {
    roomCode: string;
    loading: boolean;
    error: Error | undefined;
    setRoomCode: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<Error | undefined>>;
}

const RoomContext = createContext<RoomContextType | undefined>(undefined);

export const RoomProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [roomCode, setRoomCode] = React.useState<string>("No Room Selected");
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<Error | undefined>(undefined);

    return (
        <RoomContext.Provider value={{roomCode, loading, error, setRoomCode, setLoading, setError}}>
            {children}
        </RoomContext.Provider>
    );
};

export default RoomContext;