import React, { useEffect } from 'react'
import { useSocketContext } from '../context/socketContext'
import useConversation from '../zustand/useConversation'
import notificationSound  from '../assets/sounds/notification.mp3'
const useListenMesseges = () => {
  
    const {messeges,setMesseges,selectedConversation}=useConversation()
    const {socket}=useSocketContext()
    console.log(socket,"socolkdjfsldk")
    useEffect(()=>{
        socket?.on('newMessege',(newMessege)=>{
            newMessege.shouldShake=true
            const sound=new Audio(notificationSound)
            sound.play()
            setMesseges([...messeges,newMessege]);
        })
        return ()=>{
            socket?.off('newMessege')
        }
    },[messeges,setMesseges,socket])
}

export default useListenMesseges
