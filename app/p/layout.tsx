import { requireAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const authenticated = await requireAuth();
  if (!authenticated) return redirect("/");

  return children;
}
