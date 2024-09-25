import { AuthButton } from "@/components/auth-button";
import { LandingNav } from "@/components/landing/landing-nav";
import { Container } from "@/components/layout/container";
import BoxReveal from "@/components/magicui/box-reveal";
import RetroGrid from "@/components/magicui/retro-grid";
import { landingAuthCheck } from "@/lib/auth";
import { ArrowRightIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Home() {
  const authCheck = await landingAuthCheck();
  console.log(authCheck);
  if (authCheck !== "ok") {
    redirect(authCheck);
  }

  return (
    <header className="w-full min-h-screen overflow-x-hidden">
      <Container className="relative flex flex-col">
        <LandingNav className="z-10" />

        <div className="items-center justify-center overflow-hidden my-32 relative z-10">
          <BoxReveal boxColor={"#000000"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold">
              Photos, Videos, Movies, ...
              <span className="text-[#000000]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#000000"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem] text-muted-foreground">
              Running on <span className="text-[#000000]">your network</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#000000"} duration={0.5}>
            <div className="mt-[1.5rem]">
              <p className="flex items-center gap-2">
                <ArrowRightIcon /> 100% free, open-source, and customizable.{" "}
                <br />
              </p>
              <p className="flex items-center gap-2">
                <ArrowRightIcon /> Multiple-user auth-based system using
                NextAuth & Prisma. <br />
              </p>
              <p className="flex items-center gap-2">
                <ArrowRightIcon /> Pre-Generated &quot;profiles&quot; for each
                type of medias you want to access. <br />
              </p>
            </div>
          </BoxReveal>

          <br />
          <BoxReveal boxColor={"#000000"} duration={0.5}>
            <>
              <AuthButton />
            </>
          </BoxReveal>
        </div>

        <RetroGrid />
      </Container>
    </header>
  );
}
