import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
  const params = useParams();

  /*   const conversationId = useMemo(() => {
    if (!params?.conversationId) return "";

    return params.conversationId as string;
  }, [params?.conversationId]); */

  const conversationId = useMemo(() => params?.conversationId || "", [params?.conversationId]) as string;

  const isOpen = useMemo(() => !!conversationId, [conversationId]);

  return { isOpen, conversationId };
};
