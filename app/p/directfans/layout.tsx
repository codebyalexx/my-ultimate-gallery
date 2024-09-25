"use client";

import { Container } from "@/components/layout/container";
import ShinyButton from "@/components/magicui/shiny-button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SparklesIcon, Telescope } from "lucide-react";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <SessionProvider>
      <Container>
        <div className="grid grid-cols-4 min-h-screen">
          <div className="flex items-start justify-end p-4 pl-0">
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={"/p/directfans/browse"}
                    className={cn(
                      "flex items-center gap-2 text-xl text-muted-foreground",
                      pathname.includes("/directfans/browse")
                        ? "text-blue-500"
                        : ""
                    )}
                  >
                    <Telescope className="w-5 h-5" /> Browse
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/p/directfans/models"}
                    className={cn(
                      "flex items-center gap-2 text-xl text-muted-foreground",
                      pathname.includes("/directfans/models")
                        ? "text-blue-500"
                        : ""
                    )}
                  >
                    <SparklesIcon className="w-5 h-5" /> Models
                  </Link>
                </li>
                <li className="pt-6">
                  <Link href={"/p/directfans/models/create"}>
                    <ShinyButton>Add new model</ShinyButton>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="border-x-2 border-gray-200 col-span-2">
            {children}
          </div>
          <div className="p-4 pr-0">
            <Input placeholder="Search..." className="w-full" />
          </div>
        </div>
      </Container>
    </SessionProvider>
  );
}
