import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import useUsers from "../hooks/useUsers";
import useChats from "../hooks/useChats";
import { useMessagesContext } from "../context/MessagesContext";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const { selectedChat,setSelectedChat } = useMessagesContext();
  const { userNames } = useUsers();

  const nav=useNavigate();

  const handleSelect = (data) => {
    setSelectedChat({
        name:data.fullName,
        picture:data.picture,
        id:data._id
    });
    if(window.innerWidth<800)
      changeScreen();
  };
  
  const changeScreen=()=>{
    if(window.innerWidth<800)
    nav(`/${selectedChat.id}`);
  }

  return (
    <div className="overflow-y-auto  scrollColor ml-5 pr-3 h-[85%] flex flex-col gap-y-3  mt-5">
      {userNames?.map((e) => (
        <Contact data={e} handleSelect={handleSelect} />
      ))}
    </div>
  );
};

export default Contacts;
