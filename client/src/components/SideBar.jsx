import React from "react";
import Contacts from "./Contacts";
import Logout from "./Logout";

const SideBar = () => {
  return (
    <div className="md:w-[40%] w-full h-full border-r-2 pt-5">
      <div className="flex mx-5 items-center gap-x-2">
        <Logout />
        <label className="input w-full input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <Contacts />
    </div>
  );
};

export default SideBar;
