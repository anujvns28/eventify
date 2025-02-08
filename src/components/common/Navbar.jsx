import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility on small screens
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      {/* Navbar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-16">
          {" "}
          {/* Adjusted padding for small screens */}
          {/* Logo */}
          <NavLink
            to="/"
            className="text-white cursor-pointer text-3xl font-extrabold tracking-wide"
          >
            Eventify
          </NavLink>
          {/* Hamburger Icon (visible on small screens) */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Navigation Links (visible on large screens) */}
          <div className="hidden lg:flex space-x-6">
            {[
              { path: "/", label: "Home" },
              { path: "/events", label: "Events" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={`text-lg transition duration-300 cursor-pointer ${
                  location.pathname === link.path
                    ? "text-yellow-400 font-bold"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="text-white hover:text-gray-300">
              {!user ? (
                <NavLink to={"/login"}>Login</NavLink>
              ) : (
                <NavLink to={"/profile"}>
                  <img
                    src={user.profileImage}
                    className="rounded-full border border-yellow-500 h-[40px] w-[40px]"
                    alt="Profile"
                  />
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger Menu (visible on small screens) */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-gray-800 text-white w-full mt-16 absolute top-0 left-0 z-40`}
      >
        {[
          { path: "/", label: "Home" },
          { path: "/events", label: "Events" },
          { path: "/about", label: "About" },
          { path: "/contact", label: "Contact" },
        ].map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={`block px-6 py-3 text-lg ${
              location.pathname === link.path
                ? "text-yellow-400 font-bold"
                : "text-white hover:text-gray-300"
            }`}
            onClick={() => setIsMenuOpen(false)} // Close menu after clicking link
          >
            {link.label}
          </NavLink>
        ))}

        <div className="px-6 py-3 text-white ">
          {!user ? (
            <NavLink to={"/login"}>Login</NavLink>
          ) : (
            <NavLink to={"/profile"}>
              <div className="border p-5 border-yellow-500">
                <img
                  src={user.profileImage}
                  className="rounded-full  p-1 h-[40px] w-[40px]"
                  alt="Profile"
                />
              </div>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
