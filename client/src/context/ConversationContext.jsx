import { Children, createContext, useContext, useState } from "react";

export const ConversationContext = createContext();

export const useConversationContext=()=>{
    return useContext(ConversationContext);
}

export const ConversationContextProvider = ({ children }) => {
    const [conversation, setConversation] = useState([]);
    ;

  return <ConversationContext.Provider value={{conversation,setConversation}}>{children}</ConversationContext.Provider>;
};
