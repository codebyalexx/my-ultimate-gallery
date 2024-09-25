"use server";

import prisma from "@/lib/prisma";

export const getModels = async () => {
  const models = await prisma.dfans_model.findMany();
  return models;
};
