import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import MessegeContainer from "../../components/Messeges/MessegeContainer";

const Home = () => {
  return (
    <div className="flex sm-h-[450px] md:h-[550px] overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar />
      <MessegeContainer />
    </div>
  );
};

export default Home;
