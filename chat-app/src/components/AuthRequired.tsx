import {Outlet, useNavigate} from "react-router";
import useEndSession from "@/hooks/useEndSession.ts";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/api/firebaseConfig.ts";

// Responsible for navigating and session management

export default function AuthRequired() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEndSession();

  if (!user) {
    navigate("/");
    return null;
  }

  return <Outlet />
};