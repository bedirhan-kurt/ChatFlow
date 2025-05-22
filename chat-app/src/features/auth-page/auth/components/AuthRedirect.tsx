/**
 * AuthRedirect Component
 *
 * Responsibility:
 * Ensures that authenticated dark-mode are redirected to the "/rooms" route,
 * while unauthenticated dark-mode can access child routes.
 * This component handles session cleanup and manages navigation based on
 * the user's authentication state.
 *
 * Features:
 * - Redirects authenticated dark-mode to the "/rooms" route.
 * - Renders child components for unauthenticated dark-mode using `Outlet`.
 * - Executes session cleanup logic via the `useEndSession` hook.
 *
 * Dependencies:
 * - `Outlet` and `useNavigate` from `react-router` for navigation and rendering child routes.
 * - `useAuthState` from `react-firebase-hooks/auth` for Firebase authentication state management.
 * - `useEndSession` custom hook for handling session cleanup.
 * - `auth` from Firebase configuration for authentication.
 *
 * @component
 * @returns {TSX.Element | null} Renders child components if the user is unauthenticated, otherwise returns `null`.
 */

import {Outlet, useNavigate} from "react-router";
import useEndSession from "@/features/auth-page/auth/hooks/useEndSession.ts";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/shared/api/firebaseConfig.ts";
import {useEffect} from "react";

export default function AuthRedirect() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEndSession();

    useEffect(() => {
        if (user) {
            navigate(`/app/${user.uid}`);
        }
    }, [user, navigate]);

    if (user) {
        return null;
    }

    return <Outlet />
};