import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useParams } from "react-router-dom";
import { getEvent } from "../service/operation/event";
import { FiUsers } from "react-icons/fi";
import Modal from "../components/common/Modal";

const EventDetails = () => {
  const params = useParams();
  const [eventData, setEventData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loginMessage, setLoginMessage] = useState(false); // To track if we should show the login message

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const fetchEventData = async () => {
    const result = await getEvent(params.eventId);

    if (result) {
      setEventData(result);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [showModal]);

  const handleRegisterClick = () => {
    if (!user) {
      setLoginMessage(true); // Show the login message if user is not logged in
      setTimeout(() => setLoginMessage(false), 5000); // Hide after 5 seconds
    } else {
      setShowModal(true); // If user is logged in, show the modal
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
        {eventData ? (
          <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-6">
            <img
              src={eventData.image}
              alt={eventData.title}
              className="w-full h-64 object-cover rounded-md"
            />

            <div className="mt-6">
              <h1 className="text-3xl font-bold text-white">
                {eventData.title}
              </h1>
              <p className="text-gray-300 mt-2">{eventData.description}</p>

              <div className="mt-4 space-y-2 text-gray-400">
                <p>
                  <strong className="text-white">Date:</strong>{" "}
                  {eventData.date.split("T")[0]}
                </p>
                <p>
                  <strong className="text-white">Time:</strong> {eventData.time}
                </p>
                <p>
                  <strong className="text-white">Location:</strong>{" "}
                  {eventData.isOnline === "online"
                    ? eventData.googleMeetLink
                    : eventData.location}
                </p>
                <p className="flex items-center gap-2">
                  <FiUsers className="text-xl text-blue-400" />
                  <strong className="text-white">
                    Registered People:
                  </strong>{" "}
                  {eventData.participants.length}
                </p>
              </div>

              <div className="mt-4 inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {eventData.category}
              </div>
            </div>

            {/* Creator Info */}
            <div className="mt-6 flex items-center border-t border-gray-700 pt-4">
              <img
                src={eventData.creator.profileImage}
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

            {/* Register Now Button */}
            <div className="mt-6 text-center">
              <button
                onClick={handleRegisterClick} // Click handler for register button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
              >
                Register Now
              </button>
            </div>

            {/* Display login message if the user is not logged in */}
            {loginMessage && (
              <div className="mt-4 text-center text-red-500 font-semibold">
                Please log in first to register for this event.
              </div>
            )}
          </div>
        ) : (
          <div className="text-white font-semibold">Loading...</div>
        )}
      </div>

      {showModal && (
        <Modal setShowModal={setShowModal} eventId={eventData._id} />
      )}
      <Footer />
    </div>
  );
};

export default EventDetails;
