import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogOutButton from "./LogOutButton";
// import { useLogoutMutation } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  // const [logout, { isLoading, isError, isSuccess }] = useLogoutMutation();
  const handleLogout = async () => {
    // try {
    //   await logout().unwrap();
    //   alert("Logout successful");
    //   navigate("/login");
    // } catch (error) {
    //   console.error("Failed to logout:", error);
    // }
  };
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />

      <LogOutButton />
    </div>
  );
};

export default SideBar;
