import { Container } from "@/components/layout/container";
import { requireAuth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const authenticated = await requireAuth();
  if (!authenticated) redirect("/");

  return (
    <>
      <SessionProvider>
        <div className="w-full min-h-screen py-20">
          <Container>{children}</Container>
        </div>
      </SessionProvider>
    </>
  );
}
