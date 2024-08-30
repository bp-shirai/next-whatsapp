import { Sidebar } from "@app/_components/sidebar/Sidebar";
import { PropsWithChildren } from "react";

const ConversationsLayout = ({ children }: PropsWithChildren) => {
  return (
    <Sidebar>
      <div className="h-full w-full flex justify-center bg-gray-200">{children}</div>
    </Sidebar>
  );
};

export default ConversationsLayout;
