import { cn } from "@/lib/utils";
import { LoaderCircleIcon } from "lucide-react";

export const Loader = ({ className }: { className?: string }) => {
  return (
    <span>
      <LoaderCircleIcon className={cn("w-4 h-4 animate-spin", className)} />
    </span>
  );
};
