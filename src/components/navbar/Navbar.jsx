import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {logout} from "../../redux/slice/authSlice"
import { toast } from "react-toastify";


const Navbar = ({ setSearchQuery }) => {
  const carts = useSelector((state) => state.product.cart);
  const authenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);

  const handleSearch = (e) => {
    if (search.trim() !== "") {
      setSearchQuery(search);
      navigate("/products"); // Passing search query in state
    }
  };

  const handleLogout = () =>{
      if(authenticated){
        dispatch(logout())
      }
  }
    return (
    <header className="shadow-lg nav-header shadow-gray-400/10 px-6 py-3 fixed bg-white top-0 left-0 w-full z-50">
      {/* Navbar Start */}
      <nav className="flex justify-between items-center ">
        {/*--- Logo--- */}
        <div className="nav-right  flex  uppercase py-1 gap-4">
          <div className="flex items-center logo-section  w-[120px] ">
          <i
          onClick={()=>{
            setMenu(!menu)
          }} 
          className="fa-solid fa-bars-staggered text-[28px] text-gray-600"></i>
         
      
          <img
            src={Logo}
            alt="logo"
            className="w-full object-cover cursor-pointer"
            onClick={() => navigate("/")}
          />
          
          </div>
          {/* Navlinks */}

          <div className={`${!menu ? 'hidden':'flex'} navbar relative`}>
            {["Men", "Women", "Kids", "Home", "Beauty", "Genz", "Studio"].map(
              (data, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => navigate("/products")}
                    className={`cursor-pointer navlinks px-5 relative text-gray-700   font-bold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-red-500 after:left-0 after:-bottom-4 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200  text-[14px] flex flex-wrap items-center`}
                  >
                    <a href={`#${data}`} className="relative">
                      {data}
                    </a>
                  </div>
                );
              }
            )}

              <span className="text-pink-500 text-[11px] font-bold absolute top-[2px] right-[5px]">
                new
              </span>
          </div>
        </div>

        <div className="flex px-3">
        <div className="search-section  rounded ">
          <div className="bg-gray-100 rounded-lg px-4 flex items-center">
            <i className="search-icon fa-solid fa-magnifying-glass text-gray-500 text-[14px]"></i>
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-[500px] search-bar py-2 px-3 outline-none text-[14px]"
              onChange={(elem) => (setSearch(elem.target.value), handleSearch)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>

        <div className="flex profile-section items-center px-[10px]  ">
          {authenticated === false ? (
            <a
              onClick={() => {
                navigate("/login");
              }}
              className="cursor-pointer flex relative px-5 flex-col items-center after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-red-500 after:left-0 after:-bottom-6 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
            >
              <i className="fa-regular fa-user text-[15px]"></i>
              <p className="text-sm font-semibold">Profile</p>
            </a>
          ) : (
            <a
            onClick={()=>{
              handleLogout();
              toast.success("Log out Successfully")
            }}
              className="cursor-pointer flex relative px-5 flex-col items-center after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-red-500 after:left-0 after:-bottom-6 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
            >
              <i class="icon-logout text-[15px]"></i>
              <p className="text-sm font-semibold">Logout</p>
            </a>
          )}
          <a
            href="#profile"
            onClick={() => navigate("/wishlist")}
            className=" flex flex-col items-center  px-5"
          >
            <i className="icon-heart text-[15px]"></i>
            <p className="text-sm font-semibold">Wishlist</p>
          </a>
          <a
            onClick={() => navigate("/bag")}
            className="relative flex cursor-pointer flex-col items-center px-5"
          >
            <i className="icon-bag text-[15px]"></i>
            <p className="text-sm font-semibold">Bag <span className={` ${carts.length > 0 ?  'text-[#fff]' : 'hidden' } font-semibold absolute top-[-5px] text-[11px] bg-[#ff3e6c] rounded-full px-[6px] right-2`}>{carts.length}</span></p>
          </a>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
