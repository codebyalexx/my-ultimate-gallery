import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className={cn("w-full max-w-5xl", className)}>{children}</div>
    </div>
  );
};
