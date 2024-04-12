import React from 'react'
import Chat from "./Chat";
import { FaPaperPlane } from "react-icons/fa6";

const SelectedChat = () => {
  return (
    <div className='w-full h-full'>
      <div className="flex gap-x-4 items-center w-full  py-2 border-b-2 border-black">
        <img
          src="https://avatar.iran.liara.run/username?username=Scott+Wilson"
          alt=""
          className="w-10 aspect-square"
        />
        <h1 className="text-lg text-black font-bold">Krishna Khattri</h1>
      </div>{" "}
      <Chat />{" "}
      <label className="input mx-5 input-bordered flex items-center gap-2 mb-5">
        <input type="text" className="grow" placeholder="Send a message" />
        <FaPaperPlane />
      </label>
    </div>
  )
}

export default SelectedChat
