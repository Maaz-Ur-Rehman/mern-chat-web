import React from "react";
import { TiMessages } from "react-icons/ti";
import { useUser } from "../../context/userContext";
// import { useSelector } from "react-redux";
const NoChatSelected = () => {
  // const user = useSelector((state) => state.user.user);

  const { user } = useUser();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        {/* <p>`Welcome 👋 {user.user.fullname} ❄`</p> */}
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default NoChatSelected;
