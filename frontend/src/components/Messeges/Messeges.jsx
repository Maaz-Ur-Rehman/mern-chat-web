import React, { useEffect, useRef } from "react";
import Messege from "./Messege";
import useGetMesseges from "../../hooks/useGetMesseges";
import MessageSkeleton from "../../skeleton/MessegeSkeleton";
import useListenMesseges from "../../hooks/useListenMesseges";

const Messeges = () => {
// const arr= Array.from(Array(3))
// console.log(arr,"arr")

const {messeges,loading}=useGetMesseges()

useListenMesseges()
// console.log(useListenMesseges(),"listenmesseges")
const lastMessegeRef=useRef()
  // console.log(messeges,"messeges")

  useEffect(()=>{
    setTimeout(()=>{

      lastMessegeRef.current?.scrollIntoView({behavior:"smooth"})
    },100)

    // console.log(lastMessegeRef,"ref")


  },[messeges])
  return (


    <div className="px-4 flex-1 overflow-auto">
{loading && Array.from(Array(3)).map((_, index) => <MessageSkeleton key={index} />)}

    {!loading && messeges.lenth===0 &&
     (<span className="text-center text-white">send a messege for start conversation</span>)}
    {!loading && messeges.length>0 && (

      messeges.map((e) => (
        <div key={e._id} ref={lastMessegeRef}>
        <Messege messege={e} />   
        </div>
      ))
    )}
    </div>
  );
};

export default Messeges;
