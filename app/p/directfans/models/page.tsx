import { getModels } from "@/server/queries/dfans_models.query";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const models = await getModels();

  return (
    <div>
      <div className="p-2 border-b-2 border-gray-200">
        <h1 className="text-xl">Models</h1>
      </div>
      <ul className="p-2 space-y-2">
        {models.map((model) => (
          <li key={model.id} className="rounded-lg shadow-lg">
            <Link href={`/p/directfans/m/${model.id}`} className="block group">
              <Image
                src={model.bannerURL}
                alt={`${model.name}'s Banner`}
                height={200}
                width={800}
                className="w-full h-16 rounded-t-lg object-cover"
              />
              <div className="relative p-2 group-hover:bg-gray-50">
                <Image
                  height={100}
                  width={100}
                  alt={`${model.name}'s Avatar`}
                  src={model.avatarURL}
                  className="rounded-full absolute -top-6 left-4 h-20 w-20 object-center border-2 border-white shadow-md"
                />
                <div className="pl-24 pb-2">
                  <h2>{model.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    @{model.username}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
