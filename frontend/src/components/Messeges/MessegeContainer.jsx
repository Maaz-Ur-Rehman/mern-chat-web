import React from "react";
import Messeges from "./Messeges";
import MessegeInput from "./MessegeInput";
import NoChatSelected from "./NoChatSelected";

const MessegeContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">Maaz</span>
          </div>
          <Messeges />
          <MessegeInput />
        </>
      )}
    </div>
  );
};

export default MessegeContainer;
