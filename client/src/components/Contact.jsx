import React, { useState } from "react";
import { useSocketContext } from "../context/SocketContext";

const Contact = ({ data, handleSelect }) => {
  const { onlineUser } = useSocketContext();
  const isOnline = onlineUser.includes(data._id);

  return (
    <div
      className={`flex gap-x-4 items-center hover:bg-[#2a323c] hover:text-white text-black py-2 px-2 rounded-lg cursor-pointer `}
      onClick={() => handleSelect(data)}
    >
      <div className="w-10 aspect-square relative">
        <img src={data.picture} alt="" className="w-full h-full" />
        {isOnline ? (
          <div className="absolute top-1 right-0 bg-green-600 rounded-full w-2 h-2"></div>
        ) : null}
      </div>
      <h1 className="text-lg font-semibold">{data.fullName}</h1>
    </div>
  );
};

export default Contact;
