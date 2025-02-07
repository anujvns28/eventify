import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // User icon from react-icons
import { signup } from "../service/operation/auth";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });

    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImagePreview(objectURL);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    await signup(formData);
    setLoading(false);
    console.log("Signup Data Submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {loading ? (
        <div className=" flex items-center text-black justify-center">
          <div className="custom-loader"></div>
        </div>
      ) : (
        <div className="w-11/12 max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            Signup
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Image Upload - Clickable */}
            <div className="flex flex-col items-center">
              <label className="text-gray-300 mb-2">Profile Image:</label>
              <input
                type="file"
                accept="image/*"
                id="imageUpload"
                onChange={handleImageChange}
                className="hidden"
              />

              <label htmlFor="imageUpload" className="cursor-pointer">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Profile Preview"
                    className="w-24 h-24 rounded-full border-2 border-blue-500 object-cover"
                  />
                ) : (
                  <FaUserCircle className="w-24 h-24 text-gray-400" />
                )}
              </label>
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-gray-300">Full Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-300">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-300">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-gray-300">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Signup
            </button>
          </form>

          {/* Additional Options */}
          <div className="mt-4 text-center text-gray-400">
            <p>
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
