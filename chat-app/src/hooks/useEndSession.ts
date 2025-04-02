import { useEffect, useRef } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../api/firebaseConfig.ts";

const AUTO_LOGOUT_TIME = 5 * 60 * 1000; // 5 min (milliseconds)

export default function useEndSession() {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const resetTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            signOut(auth);
        }, AUTO_LOGOUT_TIME);
    };

    useEffect(() => {
        const events = ["mousemove", "keydown", "click"];
        events.forEach((event) => window.addEventListener(event, resetTimer));

        resetTimer();

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            events.forEach((event) => window.removeEventListener(event, resetTimer));
        };
    }, []);

    return null;
}