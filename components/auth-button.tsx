"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { useTransition } from "react";
import { Loader } from "./ui/loader";

export const AuthButton = () => {
  const [isLoading, startTransition] = useTransition();

  return (
    <Button
      onClick={async () => {
        startTransition(async () => {
          await signIn("google");
        });
      }}
      disabled={isLoading}
      className="flex items-center gap-2"
    >
      {isLoading ? <Loader /> : ""} Sign In
    </Button>
  );
};
