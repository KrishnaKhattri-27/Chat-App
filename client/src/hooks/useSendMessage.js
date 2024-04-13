import { useState } from "react";
import { useMessagesContext } from "../context/MessagesContext";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
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
      const data=res.json();
      if(data.error)
      throw new Error(data.error);

    } catch (error) {
        toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading,Send};
};

export default useSendMessage;
