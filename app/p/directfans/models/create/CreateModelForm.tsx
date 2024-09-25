"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader } from "@/components/ui/loader";
import { useToast } from "@/hooks/use-toast";
import { createModel } from "@/server/actions/dfans_models.action";
import { HardDriveUploadIcon } from "lucide-react";
import { useTransition } from "react";

export const CreateModelForm = () => {
  const [isLoading, startTransition] = useTransition();
  const { toast } = useToast();

  return (
    <form
      className="space-y-2"
      onSubmit={async (e: any) => {
        e.preventDefault();
        startTransition(async () => {
          const formData = new FormData(e.target);
          const upload = await createModel(formData);
          if (upload.success) {
            toast({
              title: "Success",
              description: `Model ${formData.get("name")} successfully created`,
              variant: "success",
            });
            e.target.reset();
          } else {
            toast({
              title: "Error",
              description: `Message: ${
                upload.error || "Unknown error, check logs for details..."
              }`,
              variant: "destructive",
            });
          }
        });
      }}
    >
      <div>
        <h2>Create Model Form</h2>
        <p className="text-muted-foreground">
          Welcome to the model creation assistant, fill out the form below to
          add a model to the database. <br />
          <i>
            • <span className="text-sm text-red-500">*</span> = required
          </i>
        </p>
      </div>
      <div>
        <Label htmlFor="name">
          Name <span className="text-sm text-red-500">*</span>
        </Label>
        <Input
          placeholder="Name"
          name="name"
          id="name"
          required
          disabled={isLoading}
        />
      </div>
      <div>
        <Label htmlFor="username">
          Username <span className="text-sm text-red-500">*</span>
        </Label>
        <Input
          placeholder="username"
          name="username"
          id="username"
          required
          disabled={isLoading}
        />
      </div>
      <div>
        <Label htmlFor="bio">Biography</Label>
        <Input placeholder="Biography" id="bio" disabled={isLoading} />
      </div>
      <div>
        <Label htmlFor="avatar">
          Avatar <span className="text-sm text-red-500">*</span>
        </Label>
        <Input
          type="file"
          multiple={false}
          name="avatar"
          id="avatar"
          required
          disabled={isLoading}
        />
      </div>
      <div>
        <Label htmlFor="banner">Banner</Label>
        <Input
          type="file"
          multiple={false}
          name="banner"
          id="banner"
          disabled={isLoading}
        />
      </div>
      <Button
        type="submit"
        className="flex items-center gap-2"
        disabled={isLoading}
      >
        {isLoading ? <Loader /> : <HardDriveUploadIcon className="w-4 h-4" />}{" "}
        Save & Upload
      </Button>
    </form>
  );
};
