"use client";

import { CreateModelForm } from "@/app/p/directfans/models/create/CreateModelForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { usePathname, useRouter } from "next/navigation";

export const CreateModelModal = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Dialog
      open={pathname.includes("directfans/models/create")}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <CreateModelForm />
      </DialogContent>
    </Dialog>
  );
};
