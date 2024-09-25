import Image from "next/image";
import { Container } from "../layout/container";
import { AuthButton } from "../auth-button";
import { LandingLanguageSelector } from "./landing-language-selector";

export const LandingNav = () => {
  return (
    <Container>
      <nav className="w-full my-3 flex items-center justify-between">
        <Image
          className=""
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
    </Container>
  );
};
