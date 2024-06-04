import React, { useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "../context/userContext";
const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const {setUser}= useUser()
  const signup = async ({
    username,
    fullname,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputError({
      username,
      fullname,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;
    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          fullname,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      
      setUser(data)
      //   navigation.push("/login");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignUp;
function handleInputError({
  username,
  fullname,
  password,
  confirmPassword,
  gender,
}) {

  console.log(username, password, confirmPassword, gender,fullname);
  if (!username || !fullname || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields");

    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    console.log("Password do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}
