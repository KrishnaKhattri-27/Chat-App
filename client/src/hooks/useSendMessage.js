import { useState } from "react";
import { useMessagesContext } from "../context/MessagesContext";
import toast from "react-hot-toast";
import { useConversationContext } from "../context/ConversationContext";
import { useAuthContext } from "../context/AuthContext";

const useSendMessage = () => {
  const {authUser}=useAuthContext();
  const [loading, setLoading] = useState(false);
  const {conversation,setConversation}=useConversationContext();
  const { selectedChat } = useMessagesContext();

  const Send = async (input) => {
    setLoading(true);
    try {
      const res = await fetch(`https://chat-app-hkvs.onrender.com/api/messages/send/${selectedChat.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer "+authUser.token
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
