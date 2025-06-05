import { Outlet, useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/shared/api/firebaseConfig.ts";
import useEndSession from "@/features/auth [page]/auth [feat]/hooks/useEndSession.ts";
import { useEffect } from "react";

export default function AuthRequired() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEndSession();

    useEffect(() => {
        if (!user) navigate("/");
    }, [user, navigate]);

    return user ? <Outlet /> : null;
}