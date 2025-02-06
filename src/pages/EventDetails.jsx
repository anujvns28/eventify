import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const EventDetails = () => {
  const eventData = {
    eventImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    eventName: "Tech Conference 2025",
    description:
      "An annual gathering of tech enthusiasts and industry leaders discussing the latest trends.",
    date: "2025-03-15",
    time: "10:00 AM - 4:00 PM",
    location: "San Francisco Convention Center",
    category: "Technology",
    creator: {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4.8,
    },
    registeredCount: 250,
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
        <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-6">
          <img
            src={eventData.eventImage}
            alt={eventData.eventName}
            className="w-full h-64 object-cover rounded-md"
          />

          <div className="mt-6">
            <h1 className="text-3xl font-bold text-white">
              {eventData.eventName}
            </h1>
            <p className="text-gray-300 mt-2">{eventData.description}</p>

            <div className="mt-4 space-y-2 text-gray-400">
              <p>
                <strong className="text-white">Date:</strong> {eventData.date}
              </p>
              <p>
                <strong className="text-white">Time:</strong> {eventData.time}
              </p>
              <p>
                <strong className="text-white">Location:</strong>{" "}
                {eventData.location}
              </p>
              <p>
                <strong className="text-white">Registered People:</strong>{" "}
                {eventData.registeredCount}
              </p>
            </div>

            <div className="mt-4 inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              {eventData.category}
            </div>
          </div>

          {/* Creator Info */}
          <div className="mt-6 flex items-center border-t border-gray-700 pt-4">
            <img
              src={eventData.creator.image}
              alt={eventData.creator.name}
              className="w-14 h-14 rounded-full border-2 border-blue-500"
            />
            <div className="ml-4">
              <h3 className="text-lg text-white font-semibold">
                {eventData.creator.name}
              </h3>
              <p className="text-yellow-400">
                ⭐ {eventData.creator.rating} / 5
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetails;
