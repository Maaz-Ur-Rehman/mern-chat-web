import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/SignUp";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "../src/context/userContext";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
