import React, { useState } from "react";
import Chat from "./Chat";
import { FaPaperPlane } from "react-icons/fa6";
import { useMessagesContext } from "../context/MessagesContext";
import useSendMessage from "../hooks/useSendMessage";

const SelectedChat = () => {
  const { selectedChat } = useMessagesContext();
  const { loading, Send } = useSendMessage();

  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input === "") return;
    await Send(input);
    setInput("");
  };

  return (
    <div className="w-full h-full">
      <div className="flex gap-x-4 items-center w-full  py-2 border-b-2 border-black">
        <img src={selectedChat.picture} alt="" className="w-10 aspect-square" />
        <h1 className="text-lg text-black font-bold">{selectedChat.name}</h1>
      </div>{" "}
      <Chat />{" "}
      <form
        onSubmit={handleSubmit}
        className="input mx-5 input-bordered flex items-center gap-2 mb-5"
      >
        <input
          type="text"
          className="grow"
          placeholder="Send a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          {" "}
          {loading ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            <FaPaperPlane className="cursor-pointer" />
          )}
        </button>{" "}
      </form>
    </div>
  );
};

export default SelectedChat;
