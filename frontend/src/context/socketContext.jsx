import {  createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./userContext";
import io from "socket.io-client"
const SocketContext=createContext()

export const useSocketContext = ()=>{
    return useContext(SocketContext)
}

export const SocketProvider=({children})=>{
    const [socket,setSocket]=useState(null)

    const [onlineUser,setOnlineUser]=useState([])
    const {user}=useUser()
    // console.log(user.user._id,"userssssssssss")
    useEffect(()=>{
        if(user){
            const socket = io("https://mern-chat-web.vercel.app", {
                query: {
                    userId: user.user._id
                },
                withCredentials: true,
                transports: ['websocket']
            });
            setSocket(socket)

            socket.on("getOnlineUsers",(user)=>{
                setOnlineUser(user)
                // console.log(user,"online user")
            })
         return ()=> socket.close()
               
        }
        else{
            if(socket){
                socket.close()
                setSocket(null)
            }
    
        }
    },[user])



    return (
        <SocketContext.Provider value={{socket,onlineUser}} >
            {children}
        </SocketContext.Provider>
    )
}