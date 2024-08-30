import { db } from "@lib/db";
import { getCurrentUser } from "./getCurrentUser";

export const getConversations = async () => {
  const { prismaUser } = await getCurrentUser();
  if (!prismaUser.id) return [];

  try {
    const conversations = await db.conversation.findMany({
      orderBy: { lastMessageAt: "desc" },
      where: { userIds: { has: prismaUser.id } },
      include: { users: true, messages: { include: { sender: true, seen: true } } },
    });

    return conversations;
  } catch (error: any) {
    console.log(error);
    return [];
  }
};
