"use server";

import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

export const createUser = async (userData: User) => {
  prisma.user.create({
    data: {
      id: userData.id,
      label: userData.label,
      isAdmin: userData.isAdmin,
      isConfirmed: userData.isConfirmed,
    },
  });
};
