import { useEffect, useRef } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../../shared/api/firebaseConfig.ts";
import setOfflineStatus from "@/features/auth-page/auth/api/setOfflineStatus.ts";
import {useUser} from "@/features/chat-page/header-menu/hooks/useUser.tsx";

const AUTO_LOGOUT_TIME = 20 * 60 * 1000; // 4 min (milliseconds)

/**
 * Custom React hook that tracks user activity and automatically logs out the user
 * after a specified period of inactivity.
 *
 * This hook listens for user events such as mouse movements, key presses, and clicks.
 * If no activity is detected within the defined `AUTO_LOGOUT_TIME`, the user is signed out
 * using Firebase authentication.
 *
 * @returns {null} This hook does not return any value or JSX.
 */
export default function useEndSession() {
    const { user } = useUser(); // Assuming you have a custom hook to get the current user
    // Reference to the inactivity timer, used to clear and reset the timer.
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    /**
     * Resets the inactivity timer. If the timer is already running, it clears the
     * existing timer and starts a new one. When the timer expires, the user is logged out.
     */
    const resetTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current); // Clear the existing timer
        }

        // Start a new timer to log out the user after inactivity
        timerRef.current = setTimeout(async () => {
            await setOfflineStatus(user.uid)
            signOut(auth); // Sign out the user using Firebase authentication
        }, AUTO_LOGOUT_TIME);
    };

    useEffect(() => {
        // List of user activity events to listen for
        const events = ["mousemove", "keydown", "click"];

        // Add event listeners for each activity event
        events.forEach((event) => window.addEventListener(event, resetTimer));

        // Initialize the timer when the component mounts
        resetTimer();

        return () => {
            // Cleanup: Clear the timer and remove event listeners when the component unmounts
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            events.forEach((event) => window.removeEventListener(event, resetTimer));
        };
    }, []);

    return null; // This hook does not render any JSX
}