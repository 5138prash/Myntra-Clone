import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.some((user) => user.email === email)) {
      toast.error("User already exists! Please login.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords should be the same.");
      return;
    }

    const newUser = { email, name, password };
    existingUsers.push(newUser); // Add new user

    localStorage.setItem("users", JSON.stringify(existingUsers)); // Save updated list

    toast.success("Signup Successful!");
    navigate("/login");
  };

  return (
    <section>
      <form onSubmit={handleSignup}>
        <div className="bg-[#ff3e6c]/10 w-full h-[907px] mt-[84px] flex justify-center pt-8">
          <div className="w-[400px] h-full bg-white">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
              alt=""
            />
            <div className="flex flex-col pt-10 px-10">
              <label className="font-bold text-[20px] text-gray-600 mb-2">Signup</label>
              <div className="flex flex-col gap-4 w-full text-[13px]">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="pashant@example.com"
                  className="bg-gray-200/40 rounded p-2 outline-[#ff3e6c]"
                  required
                />
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Prashant Tripathi"
                  className="bg-gray-200/40 rounded p-2 outline-[#ff3e6c]"
                  required
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="bg-gray-200/40 rounded p-2 outline-[#ff3e6c]"
                  required
                />
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm-Password"
                  className="bg-gray-200/40 rounded p-2 outline-[#ff3e6c]"
                  required
                />
              </div>
              <div className="w-full flex justify-center py-4">
                <button
                  type="submit"
                  className="bg-[#ff3e6c] hover:bg-pink-600 cursor-pointer text-white px-5 py-2 text-[18px] rounded w-full"
                >
                  Submit
                </button>
              </div>
              <div className="text-[12px] text-center mt-2">
                <p>
                  Have an account?
                  <span
                    onClick={() => navigate("/login")}
                    className="cursor-pointer text-[#ff3e6c] font-bold"
                  >
                    Log in
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Signup;
