import Image from "next/image";
import { AuthButton } from "../auth-button";
import { LandingLanguageSelector } from "./landing-language-selector";
import { cn } from "@/lib/utils";

export const LandingNav = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn("w-full my-3 flex items-center justify-between", className)}
    >
      <Image
        className="fade-in"
        width={50}
        height={50}
        alt="Logo"
        src={"/logo.png"}
      />
      <div className="flex items-center gap-2">
        <LandingLanguageSelector />
        <AuthButton />
      </div>
    </nav>
  );
};
