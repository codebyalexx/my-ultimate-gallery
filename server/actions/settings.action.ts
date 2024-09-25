"use server";

import { modulesStateType } from "@/app/get-started/page";
import prisma from "@/lib/prisma";

export const makeDefaultSettings = async (modules: modulesStateType) => {
  await prisma.configuration.deleteMany();
  await prisma.configuration.create({
    data: {
      m_directfans: modules.DirectFans,
      m_gallery: modules.Gallery,
      m_naughtyverse: modules.NaughtyVerse,
      m_streamflix: modules.StreamFlix,
    },
  });
};
