import React, {createContext, useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/shared/api/firebaseConfig.ts";
import {getUsername} from "@/features/chat [page]/header-menu [section]/api/getUsername.ts";

interface UserContextType {
    user: any;
    loading: boolean;
    error: Error | undefined;
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [username, setUsername] = useState<string>("");

    useEffect(() => {
        if (!user?.uid) {
            setUsername("");
            return;
        }
        console.log("User:", user.uid);
        const fetchUsername = async () => {
            const resolvedUsername = await getUsername(user.uid);
            setUsername(resolvedUsername);
            console.log("Fetched username:", resolvedUsername);
        };

        fetchUsername();
    }, [user]);

    return (
        <UserContext.Provider value={{user, loading, error, username, setUsername}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;