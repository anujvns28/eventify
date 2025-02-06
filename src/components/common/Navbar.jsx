import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

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
            { path: "/login", label: "Login" },
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
