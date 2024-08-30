import { PropsWithChildren } from "react";
import DesktopSidebarHeader from "./DesktopSidebarHeader";
import { getCurrentUser } from "@app/_actions/getCurrentUser";
import { getConversations } from "@app/_actions/getConversations";
import { ConversationList } from "@app/conversations/_components/ConversationList";

export async function Sidebar({ children }: PropsWithChildren) {
  const { prismaUser } = await getCurrentUser();
  const conversations = await getConversations();

  return (
    <div className="h-full w-screen flex">
      <aside className="h-full min-w-[300px] bg-zinc-400">
        <DesktopSidebarHeader />
        {/* <ConversationList conversations={conversations}/> */}
      </aside>
      <main>{children}</main>
    </div>
  );
}
