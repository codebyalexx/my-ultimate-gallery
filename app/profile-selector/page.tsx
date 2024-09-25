import { Container } from "@/components/layout/container";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full py-20">
      <Container className="max-w-3xl">
        <div className="w-full h-full p-8 border border-gray-200 shadow-lg rounded-xl space-y-6">
          <h1 className="text-center text-2xl font-medium">
            Select your profile
          </h1>
          <ul className="flex items-center justify-center gap-4">
            <ProfileItem
              href="/p/gallery"
              image="/Gallery.png"
              label="Gallery"
            />
            <ProfileItem
              href="/p/streamflix/browse"
              image="/StreamFlix.jpg"
              label="StreamFlix"
            />
            <ProfileItem
              href="/p/naughtyverse/browse"
              image="/NaughtyVerse.avif"
              label="NaughtyVerse"
            />
            <ProfileItem
              href="/p/directfans/browse"
              image="/DirectFans.webp"
              label="DirectFans"
            />
          </ul>
        </div>
      </Container>
    </div>
  );
}

const ProfileItem = ({
  href,
  image,
  label,
}: {
  href: string;
  image: string;
  label: string;
}) => {
  return (
    <li>
      <Link
        href={href}
        className="block bg-slate-100 p-6 rounded-xl hover:bg-slate-200 group"
      >
        <div className="bg-white shadow-lg rounded-xl group-hover:bg-gray-50 p-4 flex flex-col items-center justify-center space-y-2">
          <Image
            src={image}
            alt="DirectFans logo"
            height={64}
            width={64}
            className="rounded-full"
          />
          <h2 className="text-lg">{label}</h2>
        </div>
      </Link>
    </li>
  );
};
