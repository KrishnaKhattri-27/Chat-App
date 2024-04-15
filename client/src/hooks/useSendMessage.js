import { useState } from "react";
import { useMessagesContext } from "../context/MessagesContext";
import toast from "react-hot-toast";
import { useConversationContext } from "../context/ConversationContext";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const {conversation,setConversation}=useConversationContext();
  const { selectedChat } = useMessagesContext();

  const Send = async (input) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/messages/send/${selectedChat.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({message:input}),
      });
      const data=await res.json();
      if(data.error)
      throw new Error(data.error);

      setConversation({
        ...conversation,
        messages: [...conversation.messages, data]
    });

    } catch (error) {
        toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading,Send};
};

export default useSendMessage;
