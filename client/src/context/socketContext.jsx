import {  createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./userContext";
import io from "socket.io-client"
import { BASE_URL } from "../constant/BaseUrl";
const SocketContext=createContext()

export const useSocketContext = ()=>{
    return useContext(SocketContext)
}

export const SocketProvider=({children})=>{
    const [socket,setSocket]=useState(null)

    const [onlineUser,setOnlineUser]=useState([])
    const {user}=useUser()
    useEffect(()=>{
        // console.log(user.user._id,"userssssssssss")
        if(user){
            // console.log(user._id,"socket running")
         const socket = io.connect(`${BASE_URL}`,{
            query:{
                userId:user.user._id
            }
         })
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