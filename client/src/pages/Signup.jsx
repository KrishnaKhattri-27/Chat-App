import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const { loading, SignUp } = useSignup();

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await SignUp(inputs);
  };

  return (
    <div className="text-center px-10 py-5 w-fit aspect-auto  bg-[#F1F5FB] rounded-md bg-clip-padding  bg-opacity-70 border border-gray-100">
      <h1 className=" text-4xl mb-5">
        Sign Up <span>Chat App</span>
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <label className="input w-full input-bordered flex items-center gap-2 mb-5 ">
          <FaUserCircle />
          <input
            type="text"
            className="grow"
            placeholder="Full Name"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            required
          />
        </label>
        <label className="input w-full input-bordered flex items-center gap-2 mb-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            required
          />
        </label>
        <label className="input w-full input-bordered flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            required
          />
        </label>
        <label className="input w-full input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Confirm Password"
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
            required
          />
        </label>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
        >
          <option disabled selected>
            Gender?
          </option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
        <h5 className="my-3">
          Already Registered? <Link to={"/login"}>Login</Link>
        </h5>
        <button className="btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
