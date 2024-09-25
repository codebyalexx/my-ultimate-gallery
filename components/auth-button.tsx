"use client";

import { signIn } from "next-auth/react";
import { useTransition } from "react";
import { Loader } from "./ui/loader";
import { RainbowButton } from "./magicui/rainbow-button";
import { ArrowUpRightIcon } from "lucide-react";

export const AuthButton = () => {
  const [isLoading, startTransition] = useTransition();

  return (
    <RainbowButton
      onClick={async () => {
        startTransition(async () => {
          await signIn("google");
        });
      }}
      disabled={isLoading}
      className="flex items-center gap-2 h-10 px-4"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <ArrowUpRightIcon className="w-4 h-4" strokeWidth={3} />
      )}{" "}
      Get Started
    </RainbowButton>
  );
};
