"use client";

import { LandingLanguageSelector } from "@/components/landing/landing-language-selector";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CheckIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState, useTransition } from "react";

export default function Page() {
  const { data: session } = useSession();

  const [isLoading, startTransition] = useTransition();

  const [displayName, setDisplayName] = useState("");
  const [email] = useState(session?.user?.email || "?@?");

  const [modules, setModules] = useState({
    Gallery: true,
    StreamFlix: false,
    NaughtyVerse: false,
    DirectFans: false,
  });

  const handleCheck = (checked: boolean, field: string) => {
    setModules({
      ...modules,
      [field]: checked,
    });
  };

  return (
    <>
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-medium">Getting Started</h1>
              <p className="text-muted-foreground">
                Welcome to application setup page. We will help you out to
                configure to app!
              </p>
            </div>
            <LandingLanguageSelector />
          </div>
          <Separator />
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-medium">User Configuration</h2>
            <p className="text-muted-foreground">
              Configure the user that you used to sign in.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label>Display Name</Label>
              <Input
                placeholder={session?.user?.name || "Display Name"}
                value={displayName}
                onChange={(e) => {
                  setDisplayName(e.target.value);
                }}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">Email Address</Label>
              <Input placeholder={email} disabled />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-medium">Modules Configuration</h2>
            <p className="text-muted-foreground">
              Select the modules/profiles that you want to enable. This setting
              can be updated later.
            </p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Checkbox
                id="Gallery"
                checked={modules.Gallery}
                onCheckedChange={(c: boolean) => handleCheck(c, "Gallery")}
                disabled={isLoading}
              />
              <Label htmlFor="Gallery">
                Gallery
                <span className="text-xs text-muted-foreground">
                  - a gallery system similar to Google Photos
                </span>
              </Label>
            </li>
            <li className="flex items-center gap-2">
              <Checkbox
                id="StreamFlix"
                checked={modules.StreamFlix}
                onCheckedChange={(c: boolean) => handleCheck(c, "StreamFlix")}
                disabled={isLoading}
              />
              <Label htmlFor="StreamFlix">
                StreamFlix{" "}
                <span className="text-xs text-muted-foreground">
                  - a Netflix-like application
                </span>
              </Label>
            </li>
            <li className="flex items-center gap-2">
              <Checkbox
                id="NaughtyVerse"
                checked={modules.NaughtyVerse}
                onCheckedChange={(c: boolean) => handleCheck(c, "NaughtyVerse")}
                disabled={isLoading}
              />
              <Label htmlFor="NaughtyVerse">
                NaughtyVerse{" "}
                <span className="text-xs text-muted-foreground">
                  - a PornHub-like application
                </span>
              </Label>
            </li>
            <li className="flex items-center gap-2">
              <Checkbox
                id="DirectFans"
                checked={modules.DirectFans}
                onCheckedChange={(c: boolean) => handleCheck(c, "DirectFans")}
                disabled={isLoading}
              />
              <Label htmlFor="DirectFans">
                DirectFans{" "}
                <span className="text-xs text-muted-foreground">
                  - a OnlyFans-like application
                </span>
              </Label>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-medium">Network Configuration</h2>
            <p className="text-muted-foreground">
              You&apos;ll have to figure it out without us. This feature is
              still in development state & it is not available at this time.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Separator />
          <div className="flex items-center justify-end w-full">
            <Button
              className="flex items-center gap-2"
              disabled={isLoading}
              onClick={async () => {
                startTransition(async () => {});
              }}
            >
              <CheckIcon className="w-4 h-4" /> Confirm & Start using app
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
