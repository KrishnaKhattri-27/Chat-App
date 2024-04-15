import React, { useEffect } from "react";
import useUsers from "../hooks/useUsers";
import ChatBanner from "./ChatBanner";
import SelectedChat from "./SelectedChat";
import { useMessagesContext } from "../context/MessagesContext";

const ChatSection = () => {
  const {selectedChat} = useMessagesContext();

  return (
    <div className="flex w-full md:w-[60%] h-full flex-col justify-between">
      {selectedChat.id===undefined || selectedChat.id===null || selectedChat.id==="" ? <ChatBanner /> : <SelectedChat />}
    </div>
  );
};

export default ChatSection;
