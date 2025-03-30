import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import {toast} from "react-toastify"
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || []; // Fetch all users
    const existingUser = users.find((user) => user.email === email);

    if (existingUser && existingUser.password === password) {
      dispatch(login(existingUser)); // Dispatch correct user
      localStorage.setItem("loggedInUser", JSON.stringify(existingUser)); // Store logged-in user separately
      toast.success("Login Successful!");
      navigate("/");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="bg-[#ff3e6c]/10 w-full h-[907px] mt-[84px] flex  justify-center pt-8">
      <div className="w-[400px] h-full bg-white">
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
          alt=""
        />

        <div className="flex flex-col pt-10 px-10  ">
          <label className="font-bold text-[20px] text-gray-600 mb-2">
            Login
          </label>

          <div className="flex flex-col gap-4 w-full text-[13px]">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className=" bg-gray-200/40 rounded p-2  outline-[#ff3e6c]"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="bg-gray-200/40 rounded p-2  outline-[#ff3e6c]"
            />
          </div>

          <div className="w-full flex justify-center py-4">
            <button
              onClick={() => {
                handleLogin();
              }}
              type="submit"
              className="bg-[#ff3e6c] hover:bg-pink-600 cursor-pointer text-white px-5 py-2 text-[18px] rounded w-full"
            >
              Sumbit
            </button>
          </div>

          <div className="text-[12px] text-center mt-2 flex items-center justify-center ">
            <p>
              Don't have an account ?
              <span
                onClick={() => navigate("/signup")}
                className="cursor-pointer text-[#ff3e6c] font-bold"
              >
                {" "}
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
