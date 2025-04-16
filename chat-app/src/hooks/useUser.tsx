import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/api/firebaseConfig.ts";
import { generateFromEmail } from "unique-username-generator";

interface UserContextType {
    user: any; // Replace `any` with the appropriate user type if available
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user] = useAuthState(auth);
    const [username, setUsername] = useState<string>("");

    useEffect(() => {
        if (user?.email) {
            const randomUsername = generateFromEmail(user.email, 4);
            setUsername(randomUsername);
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, username, setUsername }}>
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