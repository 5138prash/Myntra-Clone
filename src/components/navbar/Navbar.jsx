import React, { useState } from "react";
import Logo from "../../assets/logo.png"; // Importing the logo image
import { useNavigate, Link } from "react-router-dom"; // Importing necessary hooks for routing
import { useDispatch, useSelector } from "react-redux"; // Redux hooks to dispatch and select state
import { logout } from "../../redux/slice/authSlice"; // Importing logout action from redux slice
import { toast } from "react-toastify"; // Importing toast for notifications

const Navbar = ({ setSearchQuery }) => {
  // Selecting necessary pieces of state from Redux
  const carts = useSelector((state) => state.product.cart);
  const authenticated = useSelector((state) => state.auth.isAuthenticated);

  // Initializing the useNavigate hook for navigation
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State variables for managing search and menu visibility
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);

  // Function to handle the search
  const handleSearch = (e) => {
    if (search.trim() !== "") {
      setSearchQuery(search); // Passing the search query to the parent component
      navigate("/products"); // Navigating to the products page with the search query
    }
  };

  // Function to handle user logout
  const handleLogout = () => {
    if (authenticated) {
      dispatch(logout()); // Dispatching the logout action
    }
  };

  return (
    <header className="shadow-lg nav-header shadow-gray-400/10 px-6 py-3 fixed bg-white top-0 left-0 w-full z-50">
      {/* Navbar Start */}
      <nav className="flex justify-between items-center ">
        {/* Logo Section */}
        <div className="nav-right flex uppercase py-1 gap-4">
          <div className="flex items-center logo-section w-[120px] ">
            {/* Hamburger menu toggle */}
            <i
              onClick={() => {
                setMenu(!menu); // Toggling the menu visibility
              }}
              className="fa-solid fa-bars-staggered text-[28px] text-gray-600"
            ></i>

            {/* Logo image, click navigates to homepage */}
            <img
              src={Logo}
              alt="logo"
              className="w-full object-cover cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Navbar Links */}
          <div className={`${!menu ? "hidden" : "flex"} navbar relative`}>
            {/* Map through categories to create nav links */}
            {["Men", "Women", "Kids", "Home", "Beauty", "Genz", "Studio"].map(
              (data, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => navigate("/products")} // Navigating to products page on click
                    className={`cursor-pointer navlinks px-5 relative text-gray-700 font-bold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-red-500 after:left-0 after:-bottom-4 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 text-[14px] flex flex-wrap items-center`}
                  >
                    <Link to={`#${data}`} className="relative">
                      {data}
                    </Link>
                  </div>
                );
              }
            )}

            {/* 'New' badge for new arrivals */}
            <span className="text-pink-500 text-[11px] font-bold absolute top-[2px] right-[5px]">
              new
            </span>
          </div>
        </div>

        <div className="flex px-3">
          {/* Search Bar Section */}
          <div className="search-section rounded ">
            <div className="bg-gray-100 rounded-lg px-4 flex items-center">
              {/* Search icon */}
              <i className="search-icon fa-solid fa-magnifying-glass text-gray-500 text-[14px]"></i>

              {/* Search input field */}
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-[500px] search-bar py-2 px-3 outline-none text-[14px]"
                onChange={(elem) => (
                  setSearch(elem.target.value), handleSearch
                )}
                onKeyDown={handleSearch}
              />
            </div>
          </div>

          {/* Profile and Cart Section */}
          <div className="flex profile-section items-center px-[10px]  ">
            {/* Conditional rendering of Profile or Logout button */}
            {authenticated === false ? (
              <Link
                to="/login"
                className="cursor-pointer flex relative px-5 flex-col items-center after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-red-500 after:left-0 after:-bottom-6 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                <i className="fa-regular fa-user text-[15px]"></i>
                <p className="text-sm font-semibold">Profile</p>
              </Link>
            ) : (
              // Logout button if authenticated
              <button
                onClick={() => {
                  handleLogout(); // Calling handleLogout on button click
                  toast.success("Log out Successfully"); // Showing logout success notification
                }}
                className="cursor-pointer flex relative px-5 flex-col items-center after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-red-500 after:left-0 after:-bottom-6 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                <i className="icon-logout text-[15px]"></i>
                <p className="text-sm font-semibold">Logout</p>
              </button>
            )}

            {/* Wishlist link */}
            <Link to="/wishlist" className="flex flex-col items-center px-5">
              <i className="icon-heart text-[15px]"></i>
              <p className="text-sm font-semibold">Wishlist</p>
            </Link>

            {/* Cart link with item count */}
            <Link
              to="/bag"
              className="relative flex cursor-pointer flex-col items-center px-5"
            >
              <i className="icon-bag text-[15px]"></i>
              <p className="text-sm font-semibold">
                Bag{" "}
                <span
                  className={`${
                    carts.length > 0 ? "text-[#fff]" : "hidden"
                  } font-semibold absolute top-[-5px] text-[11px] bg-[#ff3e6c] rounded-full px-[6px] right-2`}
                >
                  {carts.length} {/* Display cart item count */}
                </span>
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
