import React, { useState } from "react";
import {
  Link,
  useNavigate,
  useNavigation,
  useNavigationType,
} from "react-router-dom";
// import { useLoginMutation } from "../../services/authServices";
import { useUser } from "../../context/userContext";
import useLogin from "../../hooks/useLogin";
// import { setUser } from "../../redux/userSlice";
// import { useDispatch } from "react-redux";

const Login = () => {
  const { setUser } = useUser();

  const { login,loading}=useLogin();
  // const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  // const [login, { isLoading, isError }] = useLoginMutation();
  const navigation = useNavigate();
  const handleSubmit = async (e) => {

    // console.log(inputs,"inputs ")
    const { username, password } = inputs;
    e.preventDefault();

    await login(username, password)
    // const { username, password } = inputs;
    // if (username === "" || password === "") {
    //   alert("Please fill all the fields");
    //   return;
    // }

    // try {
    //   const response = await login(inputs).unwrap();
    //   // dispatch(setUser({ user: username }));
    //   console.log("Login successful:", response);

    //   setUser(response.username);
    //   setInputs({
    //     username: "",
    //     password: "",
    //   });

    //   alert("Login Successful");
    //   navigation("/");
    // } catch (error) {
    //   console.error("Failed to login:", error);
    //   alert("Login Failed");
    // }
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username </span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="Enter your username"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password </span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            
              <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                 {loading ?
                 <span className="loading loading-spinner"></span>
                 :
                 "Login"
                 }                   
                </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
