// import { useEffect, useState } from "react";
// import useChats from "./useChats";
// import { useSocketContext } from "../context/SocketContext";

// const useListenMessages=()=>{
//     const {socket}=useSocketContext();
//     const {conversation,setConversation}=useChats();

// const AddNew=()=>{
//         console.log("i am here",socket);

//         socket?.on('getMessages',(message)=>{
//             console.log("new",message);
//             const temp=conversation.messages.push(message);
//             setConversation(temp)
//         })
//         console.log("i am ");

//         return ()=>socket?.off('getMessages');

//     }

//     return {AddNew};
// }

// export default useListenMessages;


import { useEffect } from "react";
import useChats from "./useChats";
import { useSocketContext } from "../context/SocketContext";
import { useConversationContext } from "../context/ConversationContext";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    // const { conversation, setConversation } = useChats();
    const {conversation,setConversation}=useConversationContext()

    useEffect(() => {
        const handleNewMessage = (message) => {
            console.log("New message:", message);
            setConversation({
                ...conversation,
                messages: [...conversation.messages, message]
            });
        };

        if (socket) {
            socket.on('getMessages', handleNewMessage);

            return () => {
                socket.off('getMessages', handleNewMessage);
            };
        } else {
            console.log("no socket found");
        }
    },[conversation,setConversation,socket])

    return {};
}

export default useListenMessages;
