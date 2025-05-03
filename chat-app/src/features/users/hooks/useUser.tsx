import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/shared/api/firebaseConfig.ts";
import {getUsername} from "@/features/users/api/getUsername.ts";

interface UserContextType {
    user: any; // Replace `any` with the appropriate user type if available
    loading: boolean;
    error: Error | undefined;
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, loading, error]  = useAuthState(auth);
    const [username, setUsername] = useState<string>("");

    useEffect(() => {
        if (user?.email) {
            getUsername(user.uid).then((resolvedUsername) => {
                setUsername(resolvedUsername);
            });
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, loading, error, username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}