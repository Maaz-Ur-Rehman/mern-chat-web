import React from "react";
import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";
const LogOutButton = ({ onClick }) => {

  const {loading,logout}=useLogout()
  const Logout=async()=>{

    await logout()
  }
  return (
    <div className="mt-auto">
      {loading ? (  
          <span className="loading loading-spinner">Loading...</span>
      ) : 
      <CiLogout
        className="w-6 h-6 text-white cursor-pointer"
        onClick={Logout}
      />
    }
    </div>
  );
};

export default LogOutButton;
