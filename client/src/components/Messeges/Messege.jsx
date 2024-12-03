import React from "react";
import { useUser } from "../../context/userContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Messege = ({messege}) => {
  // const {message} = messege
  // console.log(messege ,"length");
  const {user}=useUser()
  const {selectedConversation}=useConversation()

  // console.log(user.user._id===messege?.senderId,"messege1");
 const fromMe=user.user._id===messege.senderId
 const chatClassName=fromMe ?  "chat-end" : "chat-start";
//  console.log(messege.createdAt,"created")
 let formatedTime=extractTime(messege?.createdAt)
//  console.log(formatedTime,"formatedTime")
const profilePicture=fromMe ? selectedConversation?.profilePic :  user.user.profilePic 

const shakeClass=messege.shouldShake ? "shake" : ""

// console.log(profilePicture, "profilePicture")
const bgBlueColor=fromMe ? 'bg-blue-500' : ''  

if (selectedConversation._id !== messege.receiverId) {
  return null;
}

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePicture}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bgBlueColor} ${shakeClass}`}>{messege.message}</div>
      <div className="chat-footer opacity-50 text-white text-xs flex gap-1 items-center">
        {formatedTime}
      </div>
    </div>
  );
};

export default Messege;
