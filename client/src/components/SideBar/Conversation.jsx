import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/socketContext";

const Conversation = ({convarsation,emoji,lastIdx}) => {

 const {selectedConversation,setSelectedConversation} =useConversation()

 const {onlineUser}=useSocketContext()

 const isOnline = onlineUser.includes(convarsation._id)
//  console.log(`isOnline: ${isOnline}`)  
// const isSelected = false
// console.log(selectedConversation._ id,"Id")
 const isSelected = selectedConversation?._id==convarsation._id
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-sky-500" : ""}`
    } onClick={()=>setSelectedConversation(convarsation)}>
      <div className={`avatar ${isOnline ? "online" : "" }`}>
        <div className="w-12 rounded-full">
          <img src={convarsation.profilePic} />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">{convarsation.fullname}</p>
          <span className="text-xl">{emoji}</span>
        </div>
      </div>
    </div>
    {!lastIdx && <div className="divider h-1 py-0 my-0" />}
    </>
  );
};

export default Conversation;
