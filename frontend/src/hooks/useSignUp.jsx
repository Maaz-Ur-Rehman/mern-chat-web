import React, { useState } from "react";
import toast from "react-hot-toast";
const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const signup = async ({
    username,
    fullname,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputError({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;
    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/user/signup", {
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
  if ((!username, !fullname, !password, !confirmPassword, !gender)) {
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
