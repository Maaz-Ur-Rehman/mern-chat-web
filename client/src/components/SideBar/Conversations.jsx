import React, { useEffect } from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {


const {loading , conversation}=useGetConversation()
  // console.log("Loading Conversations",conversation)
  // console.log(conversation.length,"conversation")
// 
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {
        conversation?.map((e,i)=>{
          return <Conversation key={e._id} emoji={getRandomEmoji()}  convarsation={e} lastIdx={i===conversation.length-1}/>
        })
      }
      {loading ? <span className="loading loading-spinner mx-auto"></span>:null}
    </div>
  );
};

export default Conversations;
