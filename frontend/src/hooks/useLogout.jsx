import React, { useState } from 'react'
import toast from "react-hot-toast";
import { useUser } from '../context/userContext';
const useLogout = () => {
  const {setUser}=useUser()
    const [loading,setLoading]=useState(false);
    const logout=async() => {   
        setLoading(true)

        try{
         const res= await fetch('https://mern-chat-web.vercel.app/api/auth/logout',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                }
            })

            const data=await res.json()
            // console.log(res.data,"datatasdf")

            localStorage.removeItem('chat-user')
            setUser(null)
        
            if(data.error){
                throw new Error(data.error)
            }
        }

        catch(err){
            toast.error("error logging out")
        
        }
        finally{
            setLoading(false)
        }
    }
    return {logout,loading}
}

export default useLogout
