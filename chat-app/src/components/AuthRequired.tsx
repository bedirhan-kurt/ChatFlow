import {Outlet, useNavigate} from "react-router";
import useEndSession from "@/hooks/useEndSession.ts";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/api/firebaseConfig.ts";
import {useEffect} from "react";

// Responsible for navigating and session management

export default function AuthRequired() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEndSession();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return <Outlet />
};