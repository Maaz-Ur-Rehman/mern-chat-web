import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useConversation from '../zustand/useConversation'
import { useUser } from '../context/userContext'

const useGetMesseges = () => {
    const [loading,setLoading]=useState(false)

    const {selectedConversation,messeges,setMesseges}=useConversation()
    const {user}=useUser()


    useEffect(()=>{
        const getmessege=async()=>{
            setLoading(true)
            try{
                const res=await fetch(`http://localhost:4000/api/message/getmessege/${selectedConversation._id}`,{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization":"Bearer "+user.token
                    }
                })
                const data=await res.json()
                // console.log(data,"datamese")
                setMesseges(data)
                if(data.error){
                    throw new Error(data.error)
                }
            }
            catch(err){
                toast.error(err.message)
            }
            finally{
                setLoading(false)
            }
        }
      if(selectedConversation?._id)  getmessege()
    },[selectedConversation,setMesseges])

    return {loading,messeges}
    
}

export default useGetMesseges
