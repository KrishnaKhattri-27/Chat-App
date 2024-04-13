import { createContext, useContext, useState } from "react";

export const MessagesContext = createContext();

export const useMessagesContext = () => {
  return useContext(MessagesContext);
};

export const MessagesContextProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState({name:"",picture:"",id:""});

  return (
    <MessagesContext.Provider value={{ selectedChat, setSelectedChat }}>
      {children}
    </MessagesContext.Provider>
  );
};
