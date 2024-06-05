import React, { useState } from 'react'
import toast from "react-hot-toast";
import { useUser } from '../context/userContext';
import { BASE_URL } from '../constant/BaseUrl';


const useLogin = () => {
  const [loading,setLoading] = useState()
  const {setUser} = useUser()

        const login=async(username, password)=>{
            console.log(username, password)
            const success=handleInputError({username, password})
            if (!success) return

            try {


                setLoading(true)
                const res = await fetch(`${BASE_URL }/api/auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        password
                    })
                })
                const data = await res.json()
                localStorage.setItem("chat-user", JSON.stringify(data) )
                // console.log(data, "data")
                setUser(data)
                if (data.error) {
                    toast.error(data.error)
                    setLoading(false)
                    return
                }
                toast.success(data.message)
                setLoading(false)
            } catch (error) {
                throw new Error(data.error);
                // toast.error(error.message)
                // console.log(error)
            }
            finally {
                setLoading(false)
            }

        
        }


    return {loading,login}

}

function handleInputError({username, password}) {
    if ((!username ||!password)) {
        toast.error("Please fill all the fields")
        return false
    }

    return true
}




export default useLogin
