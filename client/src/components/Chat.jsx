import React, { useEffect, useState } from "react";
import Message from "./Message";
import useChats from "../hooks/useChats";

const Chat = () => {
  const { conversation } = useChats();
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    console.log(conversation.messages, "chat");
    if (conversation.messages)
      setChatMessages(
        conversation.messages.sort((a, b) => a.createdAt - b.createdAt)
      );
  }, [conversation]);

  return (
    <div className="px-5 h-[75%] overflow-y-scroll scrollColor">
      {chatMessages?.map((e) => (
        <Message data={e} />
      ))}
    </div>
  );
};

export default Chat;
