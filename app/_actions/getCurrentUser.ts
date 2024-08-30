import { db } from "@lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { User as ClerkUser } from "@clerk/nextjs/server";
import { User as PrismaUser } from "@prisma/client";
import { NextResponse } from "next/server";

interface CurrentUser {
  prismaUser: PrismaUser & {
    following: PrismaUser[];
  };
  clerkUser: ClerkUser;
}

export const getCurrentUser = async (): Promise<CurrentUser> => {
  const clerkUser = await currentUser();

  if (!clerkUser) throw new Error("Unauthorized");

  const prismaUser = await db.user.findUnique({
    where: { externalUserId: clerkUser.id },
    include: { following: true, followedBy: true },
  });

  if (!prismaUser) throw new Error("User not found!");

  return { prismaUser, clerkUser };
};
