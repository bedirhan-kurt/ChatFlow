import {Outlet, useNavigate} from "react-router";
import useEndSession from "@/hooks/useEndSession.ts";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/api/firebaseConfig.ts";

export default function AuthRequired() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEndSession();

  // Responsible for navigating
  if (!user) {
    navigate("/");
    return null;
  }

  return <Outlet />
};