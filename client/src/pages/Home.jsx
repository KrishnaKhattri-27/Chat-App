import React from "react";
import SideBar from "../components/SideBar";
import ChatSection from "../components/ChatSection";

const Home = () => {
  return (
    <div className="w-[95%] xs:w-[75%] sm:w-[50%] md:w-[95%] lg:w-[75%] h-[75%] aspect-auto  bg-[#F1F5FB] rounded-md bg-clip-padding  bg-opacity-70 border border-gray-100 flex md:flex-row">
      <SideBar />
      {window.innerWidth < 800 ? null : <ChatSection />}
    </div>
  );
};

export default Home;
