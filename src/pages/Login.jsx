import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slice/authSlice";  // Login action
import { useDispatch } from "react-redux";  // Redux dispatch hook
import { toast } from "react-toastify";  // Toast notifications

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State hooks for email and password
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Login handler function
  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || []; // Fetch users from localStorage
    const existingUser = users.find((user) => user.email === email); // Find the user by email

    if (existingUser && existingUser.password === password) { // Check credentials
      dispatch(login(existingUser)); // Dispatch login action
      localStorage.setItem("loggedInUser", JSON.stringify(existingUser)); // Store logged-in user in localStorage
      toast.success("Login Successful!"); // Show success toast
      navigate("/"); // Navigate to homepage
    } else {
      toast.error("Invalid Credentials"); // Show error toast
    }
  };

  return (
    <div className="bg-[#ff3e6c]/10 w-full h-[907px] mt-[84px] flex justify-center pt-8">
      <div className="w-[400px] h-full bg-white">
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
          alt="Login image"
        />

        <div className="flex flex-col pt-10 px-10">
          <label className="font-bold text-[20px] text-gray-600 mb-2">Login</label>

          <div className="flex flex-col gap-4 w-full text-[13px]">
            <input
              onChange={(e) => setEmail(e.target.value)}  // Set email
              type="email"
              placeholder="Enter your email"
              className="bg-gray-200/
