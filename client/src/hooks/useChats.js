import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useUsers from "./useUsers";
import { useMessagesContext } from "../context/MessagesContext";
import { useConversationContext } from "../context/ConversationContext";
import { useAuthContext } from "../context/AuthContext";

const useChats = () => {
  const {authUser}=useAuthContext()
  const [loading, setLoading] = useState(false);
  // const [conversation, setConversation] = useState([]);
  const {conversation,setConversation}=useConversationContext()
  const {selectedChat}=useMessagesContext();
//   const { selected } = useUsers();

useEffect(()=>{
    const getConversation = async () => {
        setLoading(true);
        try {
          const res = await fetch(`/api/messages/get/${selectedChat.id}`,{
            headers:{
              "Authorization":"Bearer "+authUser.token
            }
          });
          const data = await res.json();
          if(data===null || data===undefined) {
            setConversation([]);
            return;
          }
          if (data.error) throw new Error(data.error);
          setConversation(data);
        } catch (error) {
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      };

      if(selectedChat.id) getConversation();
    //   console.log(selectedChat,"runned",conversation);
},[selectedChat])

  return { loading };
};

export default useChats;
