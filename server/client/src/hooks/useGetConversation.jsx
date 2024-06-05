import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useUser } from '../context/userContext'
import { BASE_URL } from '../constant/BaseUrl'

const useGetConversation = () => {


    const [loading,setLoading]=useState(false)
    const [conversation,setConversation]=useState([])
    const {user}=useUser()
    // console.log(user.token,"userwarsdg")
    useEffect(()=>{
        const getconversation=async()=>{
            try{
                setLoading(true)
            const response=await fetch(`${BASE_URL}/api/user/`, {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+user?.token
                }
            })
            // console.log(response,"response" )
            const data=await response.json()
            // console.log(data,"data" )
            setConversation(data)
            setLoading(false)
     
            }
        catch(err){
            // toast.error(err.message)
            console(err.message,"message" )
            setLoading(false)
          }
        }
        getconversation()
    },[])

    return {loading,conversation}
}

export default useGetConversation
