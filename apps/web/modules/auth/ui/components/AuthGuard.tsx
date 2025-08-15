"use client";

import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { AuthLayoutModule } from "../layouts/auth-layout";
import { SignInView } from "../views/SignInView";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthLoading>
        <AuthLayoutModule>
          <p className="text-black">Loading...</p>
        </AuthLayoutModule>
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <AuthLayoutModule>
          <SignInView />
        </AuthLayoutModule>
      </Unauthenticated>
    </>
  );
};
