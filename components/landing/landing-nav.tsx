import Image from "next/image";
import { Container } from "../layout/container";
import favicon from "@/app/favicon.ico";
import { AuthButton } from "../auth-button";

export const LandingNav = () => {
  return (
    <Container>
      <nav className="w-full my-3 flex items-center justify-between">
        <Image className="" width={50} height={50} alt="Logo" src={favicon} />
        <div className="flex items-center gap-2">
          <AuthButton />
        </div>
      </nav>
    </Container>
  );
};
