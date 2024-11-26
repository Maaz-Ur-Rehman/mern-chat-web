import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUp from "./pages/Signup/SignUp";
import SideBar from "./components/SideBar/SideBar";
  import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserProvider, useUser } from "../src/context/userContext";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
function App() {
  const [count, setCount] = useState(0);
  
  const {user}=useUser()
  console.log(user,"useconslsdjflkds")
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Toaster />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/login" element={user ? <Navigate to= "/"/> : <Login />} />
          <Route path="/signup" element={user ?<Navigate to="/" /> : <SignUp />} />
        </Routes>
        </div>
    </>
  );
}

export default App;
