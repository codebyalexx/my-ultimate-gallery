import { AuthButton } from "@/components/auth-button";

export default function Home() {
  return (
    <div className="m-20 flex flex-col items-center justify-center gap-6">
      <h1 className="font-medium text-3xl">My Ultimate Gallery</h1>
      <AuthButton />
    </div>
  );
}
