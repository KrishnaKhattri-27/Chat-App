import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import useChats from "../hooks/useChats";
import { useMessagesContext } from "../context/MessagesContext";
import useListenMessages from "../hooks/useListenMessages";
import { useConversationContext } from "../context/ConversationContext";

const Chat = () => {
  const { loading } = useChats();
  const { conversation, setConversation } = useConversationContext();

  useListenMessages();

  const { selectedChat } = useMessagesContext();
  const [chatMessages, setChatMessages] = useState([]);

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      // console.log(lastMessageRef.current);
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    if (conversation.messages)
      setChatMessages(
        conversation.messages.sort((a, b) => a.createdAt - b.createdAt)
      );
    else {
      setChatMessages([]);
    }
  }, [conversation]);

  return (
    <div className="px-5 h-[75%] overflow-y-auto scrollColor">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <span className="loading loading-dots loading-lg text-black"></span>
        </div>
      ) : chatMessages.length === 0 ? (
        <h1 className="text-black font-medium text-sm text-center mt-5 ">
          Start your first conversation with <br /> {selectedChat.name}
        </h1>
      ) : (
          chatMessages?.map((e) => (
            <div
              ref={
                chatMessages.length === chatMessages.indexOf(e) + 1
                  ? lastMessageRef
                  : null
              }
            >
              {" "}
              <Message key={chatMessages.indexOf(e)} data={e} />
            </div>
          ))
      )}
    </div>
  );
};

export default Chat;
