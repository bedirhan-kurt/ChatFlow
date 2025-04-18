import {Outlet, useNavigate} from "react-router";
import useEndSession from "@/hooks/useEndSession.ts";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/api/firebaseConfig.ts";
import {useEffect} from "react";

/**
 * AuthRequired Component
 *
 * Responsible for ensuring that only authenticated users can access certain routes.
 * It checks the user's authentication state and redirects unauthenticated users to the login page.
 * Additionally, it handles session cleanup using the `useEndSession` hook.
 *
 * Features:
 * - Redirects unauthenticated users to the root ("/") route.
 * - Renders child components for authenticated users using `Outlet`.
 * - Invokes session cleanup logic via `useEndSession`.
 *
 * Dependencies:
 * - `Outlet` and `useNavigate` from `react-router` for navigation and rendering child routes.
 * - `useAuthState` from `react-firebase-hooks/auth` for Firebase authentication state.
 * - `useEndSession` custom hook for session management.
 * - `auth` from Firebase configuration.
 *
 * @component
 * @returns {TSX.Element | null} Renders child components if the user is authenticated, otherwise returns `null`.
 */

export default function AuthRequired() {
  // Retrieves the current user's authentication state
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // Executes session cleanup logic
  useEndSession();

  useEffect(() => {
    // Redirects to the root route if the user is not authenticated
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Returns null if the user is not authenticated
  if (!user) {
    return null;
  }

  // Renders child components for authenticated users
  return <Outlet />
};