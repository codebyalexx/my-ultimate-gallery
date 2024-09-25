"use server";

import prisma from "@/lib/prisma";

export const getModels = async () => {
  const models = await prisma.dfans_model.findMany();
  return models;
};

export const getModelMedia = async (id: string) => {
  const media = await prisma.dfans_model_media.findFirst({
    where: {
      id,
    },
  });
  return media;
};
