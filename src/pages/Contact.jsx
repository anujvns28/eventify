import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <Navbar />
      <div className="flex py-24  items-center justify-center min-h-screen bg-gray-900 p-4">
        <div className="w-11/12 max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
          {/* Main Heading */}
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            Get in Touch
          </h2>

          {/* Subheading */}
          <p className="text-gray-400 text-center mb-6">
            Have a question about our event management services? Fill out the
            form below and we'll get back to you soon!
          </p>

          {submitted && (
            <p className="text-green-400 text-center mb-4">
              ✅ Your message has been sent successfully!
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-gray-300">
                Full Name <span className="text-red-500">*</span>:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-300">
                Email <span className="text-red-500">*</span>:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-gray-300">
                Phone <span className="text-red-500">*</span>:
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border p-2 w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-gray-300">
                Subject <span className="text-red-500">*</span>:
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border p-2 w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-300">
                Message <span className="text-red-500">*</span>:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border p-2 w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
