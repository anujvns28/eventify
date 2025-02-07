import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  console.log(user, "this is user ");

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-16">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-white cursor-pointer text-3xl font-extrabold tracking-wide"
        >
          Eventify
        </NavLink>

        {/* Navigation Links */}
        <div className="flex space-x-6">
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
                  className="rounded-full h-[40px] w-[40px]"
                />
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
