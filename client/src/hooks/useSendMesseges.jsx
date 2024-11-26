import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'
import { useUser } from '../context/userContext'
import toast from 'react-hot-toast'
import { BASE_URL } from '../constant/BaseUrl'

const useSendMesseges = () => {
 const {messeges,setMesseges,selectedConversation} =useConversation()
 const [loading,setLoading]=useState(false)
 const {user}=useUser()



 const sendmessege=async(messege)=>{

    try{
    setLoading(true)
        const res=await fetch(`${BASE_URL}/api/message/sendmessege/${selectedConversation._id}`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    "Authorization":"Bearer "+user.token
                },
                body:JSON.stringify({
                    messege:messege
                })
            })
            const data=await res.json()
            if (data.error) throw new Error(data.error);

            setMesseges([...messeges,data])
          
    }   
    catch(err){
        toast.error(err.message)
    }
    finally{
        setLoading(false)
    }
 }
 return {sendmessege,loading}
}

export default useSendMesseges
