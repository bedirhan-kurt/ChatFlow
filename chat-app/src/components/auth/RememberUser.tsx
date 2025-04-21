import {Outlet, useNavigate} from "react-router";
import useEndSession from "@/hooks/useEndSession.ts";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/api/firebaseConfig.ts";
import {useEffect} from "react";


export default function RememberUser() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEndSession();

    useEffect(() => {
        if (user) {
            navigate("/application");
        }
    }, [user, navigate]);

    if (user) {
        return null;
    }

    return <Outlet />
};