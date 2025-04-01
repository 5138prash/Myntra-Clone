import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const q = query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      let userArray = [];
      querySnapshot.forEach((doc) => {
        userArray.push({ ...doc.data(), id: doc.id });
      });
      setUsers(userArray);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkUserCredentials = async () => {
    getAllUsers();
    const foundUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (foundUser) {
      toast.success("User logged in successfully");
      localStorage.setItem("user", JSON.stringify(foundUser));
      dispatch(loginUser(foundUser));
      navigate("/");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUserCredentials();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-[#ff3e6c]/10 w-full h-[907px] mt-[79px] flex justify-center pt-8">
        <div className="w-[400px] h-full bg-white">
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
            alt="Login Banner"
          />

          <div className="flex flex-col pt-10 px-10">
            <label className="font-bold text-[20px] text-gray-600 mb-2">
              Login
            </label>

            <div className="flex flex-col gap-4 w-full text-[13px]">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-200/40 rounded p-2 outline-[#ff3e6c]"
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="bg-gray-200/40 rounded p-2 outline-[#ff3e6c]"
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

            <div className="text-[12px] text-center mt-2 flex items-center justify-center">
              <p>
                Don't have an account?
                <span
                  onClick={() => navigate("/signup")}
                  className="cursor-pointer text-[#ff3e6c] font-bold"
                >
                  Sign up
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
