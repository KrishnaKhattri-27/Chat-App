import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useMessagesContext } from "../context/MessagesContext";

const Message = ({ data }) => {
  const { authUser } = useAuthContext();
  const {selectedChat}=useMessagesContext()
  const [position, setPosition] = useState();

  useEffect(() => {
    if (data.senderID === authUser._id) setPosition("sender");
    else setPosition("reciever");
  }, []);

  return (
    <div className={`chat ${position==="sender"?"chat-end":"chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={position==="sender"?authUser.picture:selectedChat.picture}
          />
        </div>
      </div>
      <div className={`chat-bubble ${position==="sender"?"bg-[#1F2A44]":"bg-[#35516C]"}  text-white shadow-md shadow-slate-400`}>
        {data.message}
      </div>
    </div>
  );
};

export default Message;
