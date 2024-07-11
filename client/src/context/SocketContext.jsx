import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client"


export const SocketContext=createContext();

export const useSocketContext=()=>{
    return useContext(SocketContext);
}


export const SocketContextProvider=({children})=>{
    const [socket,setSocket]=useState();
    const [onlineUser,setOnlineUser]=useState([])
    const {authUser}=useAuthContext();

    useEffect(()=>{
        if(authUser){
            const socket=io("https://chat-app-hkvs.onrender.com",{
                query:{
                    userID:authUser._id
                }
            });
            setSocket(socket);
            
            socket.on('getOnlineUsers',(users)=>{
                console.log("online");
                   setOnlineUser(users); 
            })

            return ()=>socket.close();
        } else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser])

    return <SocketContext.Provider value={{socket,onlineUser}}>{children}</SocketContext.Provider>
}