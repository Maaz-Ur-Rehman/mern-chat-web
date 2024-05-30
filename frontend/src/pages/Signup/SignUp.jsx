import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link, useNavigate } from "react-router-dom";
// import { useSignUpMutation } from "../../services/authServices";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const navigation = useNavigate();
  const { loading, signup } = useSignUp();
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup(inputs);
  };
  // const [signUp, { isLoading, isError, isSuccess }] = useSignUpMutation();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const { fullname, username, password, confirmPassword, gender } = inputs;

  //   if (password !== confirmPassword) {
  //     return alert("Passwords do not match");
  //   }
  //   if (password.length < 6) {
  //     return alert("Password must be at least 6 characters");
  //   }
  //   if (username.length < 6) {
  //     return alert("Username must be at least 6 characters");
  //   }
  //   if (fullname.length < 6) {
  //     return alert("Full name must be at least 6 characters");
  //   }
  //   if (gender === "") {
  //     return alert("Please select your gender");
  //   }

  //   try {
  //     await signUp(inputs).unwrap();
  //     setInputs({
  //       fullname: "",
  //       username: "",
  //       password: "",
  //       confirmPassword: "",
  //       gender: "",
  //     });
  //     alert("Sign Up Successful");
  //     navigation("/login");
  //   } catch (error) {
  //     console.error("Failed to sign up:", error);
  //     alert("Sign Up Failed");
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="Enter your full name"
              value={inputs.fullname}
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
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
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="Enter your Confrim Password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckBox
            selectedGender={inputs.gender}
            onChangeGender={(gender) =>
              setInputs({ ...inputs, gender: gender })
            }
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block  mt-2 border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
