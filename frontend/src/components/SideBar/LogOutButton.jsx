import React from "react";
import { CiLogout } from "react-icons/ci";
const LogOutButton = ({ onClick }) => {
  return (
    <div className="mt-auto">
      <CiLogout
        className="w-6 h-6 text-white cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
};

export default LogOutButton;
