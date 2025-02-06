import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const EventCreationForm = ({ setOpenEventCreationForm }) => {
  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    date: "",
    time: "",
    isOnline: "offline", // Default to offline
    location: "",
    googleMeetLink: "",
    category: "",
    eventImage: "",
  });

  const [imagePreview, setImagePreview] = useState("");

  const categories = [
    "Technology",
    "Music",
    "Art",
    "Food",
    "Sports",
    "Science",
    "Fashion",
    "Business",
    "Gaming",
    "Literature",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, eventImage: file });

    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImagePreview(objectURL);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Data Submitted: ", formData);
  };

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[600px] rounded-lg border border-gray-600 bg-gray-800 p-6">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl text-center font-semibold text-white mb-6">
            Event Creation Form
          </h2>
          <p
            onClick={() => setOpenEventCreationForm(false)}
            className="text-white text-2xl border border-white p-2 rounded-full cursor-pointer font-semibold"
          >
            <RxCross2 />
          </p>
        </div>

        <p className="text-gray-400 text-center mb-6">
          Fill in the details below to create an amazing event. Choose whether
          your event is online or offline, and don't forget to upload an
          engaging event image!
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-6 rounded-lg shadow-lg"
        >
          <div>
            <label className="block text-white">Event Name:</label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              className="border p-2 w-full rounded-md bg-gray-700 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-white">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border p-2 w-full rounded-md bg-gray-700 text-white"
              rows="4"
              required
            />
          </div>

          <div>
            <label className="block text-white">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border p-2 w-full rounded-md bg-gray-700 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-white">Time:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="border p-2 w-full rounded-md bg-gray-700 text-white"
              required
            />
          </div>

          {/* Ask if event is online or offline */}
          <div>
            <label className="block text-white">Is this an online event?</label>
            <select
              name="isOnline"
              value={formData.isOnline}
              onChange={handleChange}
              className="border p-2 w-full rounded-md bg-gray-700 text-white"
              required
            >
              <option value="offline">Offline (Physical Event)</option>
              <option value="online">Online (Google Meet Event)</option>
            </select>
          </div>

          {/* Show Google Meet Link if online */}
          {formData.isOnline === "online" && (
            <div>
              <label className="block text-white">Google Meet Link:</label>
              <input
                type="url"
                name="googleMeetLink"
                value={formData.googleMeetLink}
                onChange={handleChange}
                className="border p-2 w-full rounded-md bg-gray-700 text-white"
                placeholder="https://meet.google.com/xyz-abc-def"
                required
              />
            </div>
          )}

          {/* Show Address if offline */}
          {formData.isOnline === "offline" && (
            <div>
              <label className="block text-white">Address:</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="border p-2 w-full rounded-md bg-gray-700 text-white"
                placeholder="Enter event address"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-white">Select Category:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border p-2 w-full rounded-md bg-gray-700 text-white"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-white">Event Image:</label>
            <input
              type="file"
              name="eventImage"
              onChange={handleImageChange}
              className="border p-2 w-full rounded-md bg-gray-700 text-white"
              required
            />
          </div>

          {/* Display Image Preview */}
          {imagePreview && (
            <div className="mt-4">
              <h3 className="text-white">Image Preview:</h3>
              <img
                src={imagePreview}
                alt="Event preview"
                className="w-full h-auto mt-2 rounded-md"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventCreationForm;
