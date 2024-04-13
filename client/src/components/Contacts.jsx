import React, { useState } from "react";
import Contact from "./Contact";
import useUsers from "../hooks/useUsers";
import useChats from "../hooks/useChats";
import { useMessagesContext } from "../context/MessagesContext";

const Contacts = () => {
  const { selectedChat,setSelectedChat } = useMessagesContext();
  const { userNames } = useUsers();

  const handleSelect = (data) => {
    setSelectedChat({
        name:data.fullName,
        picture:data.picture,
        id:data._id
    });
  };
  return (
    <div className="overflow-y-scroll  scrollColor ml-5 pr-3 h-[85%] flex flex-col gap-y-3  mt-5">
      {userNames?.map((e) => (
        <Contact data={e} handleSelect={handleSelect} />
      ))}
    </div>
  );
};

export default Contacts;
