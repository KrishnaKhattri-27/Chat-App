import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout";

const Logout = () => {
  const { loading, LogOut } = useLogout();

  const handleLogout = async () => {
    await LogOut();
  };
  return (
    <div className=" text-start">
      <BiLogOut
        size={27}
        className="text-[#1d232a] cursor-pointer"
        onClick={handleLogout}
      />
    </div>
  );
};

export default Logout;
