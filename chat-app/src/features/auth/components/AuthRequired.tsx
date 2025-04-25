/**
 * AuthRequired Component
 *
 * Responsibility:
 * Ensures that only authenticated users can access specific routes in the application.
 * This component checks the user's authentication state and redirects unauthenticated users
 * to the login page. It also handles session cleanup using a custom hook.
 *
 * Features:
 * - Redirects unauthenticated users to the root ("/") route.
 * - Renders child components for authenticated users using `Outlet`.
 * - Executes session cleanup logic via the `useEndSession` hook.
 *
 * Dependencies:
 * - `Outlet` and `useNavigate` from `react-router` for navigation and rendering child routes.
 * - `useAuthState` from `react-firebase-hooks/auth` for Firebase authentication state management.
 * - `useEndSession` custom hook for handling session cleanup.
 * - `auth` from Firebase configuration for authentication.
 *
 * @component
 * @returns {TSX.Element | null} Renders child components if the user is authenticated, otherwise returns `null`.
 */

import {Outlet, useNavigate} from "react-router";
import useEndSession from "@/features/auth/hooks/useEndSession.ts";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/shared/api/firebaseConfig.ts";
import {useEffect} from "react";

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