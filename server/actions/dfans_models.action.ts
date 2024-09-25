"use server";

import fs from "fs";
import prisma from "@/lib/prisma";

export const createModel = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const username = formData.get("username") as string;
  const bio = formData.get("bio") as string;

  const avatarFile = formData.get("avatar") as File;
  const bannerFile = formData.get("banner") as File;

  if (!name || !username || !avatarFile || avatarFile.size === 0) {
    return {
      success: false,
      error: "Missing some data in the formData.",
    };
  }

  const model = await prisma.dfans_model.create({
    data: {
      avatarURL: "",
      name,
      username,
      bio: bio || "",
      bannerURL: "",
    },
  });

  if (avatarFile && avatarFile.size > 0) {
    const avatarArrBuffer = await avatarFile.arrayBuffer();
    const avatarBuffer = new Uint8Array(avatarArrBuffer);
    const finalName = `${model.username}_${Date.now()}_avatar_${
      avatarFile.name
    }`;
    await fs.promises.writeFile(
      `./storage/directfans/${finalName}`,
      avatarBuffer
    );
    const avatar = await prisma.dfans_model_media.create({
      data: {
        label: "Avatar",
        type: "image",
        sizeBits: avatarFile.size,
        filename: finalName,
        extension: finalName.split(".")[finalName.split(".").length - 1],
        modelId: model.id,
      },
    });
    await prisma.dfans_model.update({
      where: {
        id: model.id,
      },
      data: {
        avatarURL: `/api/get-media/${avatar.id}`,
      },
    });
  }

  if (bannerFile && bannerFile.size > 0) {
    const bannerArrBuffer = await bannerFile.arrayBuffer();
    const bannerBuffer = new Uint8Array(bannerArrBuffer);
    const finalName = `${model.username}_${Date.now()}_banner_${
      bannerFile.name
    }`;
    await fs.promises.writeFile(
      `./storage/directfans/${finalName}`,
      bannerBuffer
    );
    const banner = await prisma.dfans_model_media.create({
      data: {
        label: "Banner",
        type: "image",
        sizeBits: bannerFile.size,
        filename: finalName,
        extension: finalName.split(".")[finalName.split(".").length - 1],
        modelId: model.id,
      },
    });
    await prisma.dfans_model.update({
      where: {
        id: model.id,
      },
      data: {
        bannerURL: `/api/get-media/${banner.id}`,
      },
    });
  }

  return {
    success: true,
  };
};
