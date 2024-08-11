import { createFileRoute, useRouter } from "@tanstack/react-router";
import { isAuthenticated, signIn, signOut } from "../utils/auth";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/login")({
  component: login,
});

export default function login() {
  const [authStatus, setAuthStatus] = useState(isAuthenticated());

  const handleSignIn = () => {
    signIn();
    setAuthStatus(true);
    router.invalidate();
  };

  const handleSignOut = () => {
    signOut();
    setAuthStatus(false);
    router.invalidate();
  };

  useEffect(() => {
    // This effect runs whenever `authStatus` changes and rechecks the authentication status.
    setAuthStatus(isAuthenticated());
  }, [authStatus]);
  const router = useRouter();
  return (
    <div>
      <h2>Login Page</h2>
      {authStatus ? (
        <div>
          <div>Hi user, you are authenticated!</div>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-200 border border-blue-600 hover:border-blue-700"
          >
            Sign out
          </button>
        </div>
      ) : (
        <>
          <div className="text-red-600">You are not authenticated</div>
          <button
            onClick={handleSignIn}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 border border-blue-600 hover:border-blue-700"
          >
            Sign in
          </button>
        </>
      )}
    </div>
  );
}
