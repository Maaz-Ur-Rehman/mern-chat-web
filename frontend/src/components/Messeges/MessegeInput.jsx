import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMesseges from "../../hooks/useSendMesseges";
import toast from "react-hot-toast";
const MessegeInput = (props) => {
  const {sendmessege,loading}=useSendMesseges()

  const [messege,setMessege]=useState("")
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!messege){
      return toast.error("Please enter a messege")
    }
    await sendmessege(messege)
    setMessege("")
    
   
  }
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={messege}
          onChange={(e)=>setMessege(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? <span className="loading loading-spinner"></span>
          :
          <BsSend className="text-white" />
          }
        </button>
      </div>
    </form>
  );
};

export default MessegeInput;
