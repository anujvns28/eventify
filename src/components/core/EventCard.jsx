import React from "react";
import {
  FaRegClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-xl rounded-lg w-80 h-auto p-4 flex flex-col items-center justify-between border border-gray-200 hover:shadow-2xl transition-all relative">
      {/* Organizer Image */}

      {/* Event Image */}
      <div className="w-full h-44 overflow-hidden rounded-lg">
        <img
          src={event.image}
          className="w-full h-full object-cover"
          alt="Event"
        />
      </div>

      <p className="text-4xl my-2 font-bold text-center">{event.title}</p>
      <p className="text-center pb-2">
        {event.description.length > 50
          ? event.description.substring(0, 50) + "..."
          : event.description}
      </p>
      <div
        onClick={() => navigate(`/eventdetails/${event._id}`)}
        className="px-5 py-2 cursor-pointer bg-blue-700 rounded-md text-white w-fit flex"
      >
        Register now
      </div>

      {/* Divider */}
      <div className="border-b-2 w-full border-slate-400 py-3"></div>

      {/* Event Details */}
      <div className="w-full mt-3">
        <div className="space-y-2">
          {/* Time */}
          <div className="flex items-center space-x-2">
            <FaRegClock className="text-blue-500" />
            <div className="flex flex-row gap-2">
              <p className="font-semibold text-gray-700">Time</p>
              <p className="text-gray-600">{event.time}</p>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-blue-500" />
            <div className="flex flex-row gap-2">
              <p className="font-semibold text-gray-700">Date</p>
              <p className="text-gray-600">
                {new Date(event.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <div className="flex flex-row gap-2">
              <p className="font-semibold text-gray-700">Location</p>
              <p className="text-gray-600">
                {event.location || "Google Meet(online)"}
              </p>
            </div>
          </div>

          {/* Participants (Highlighted) */}
          <div className="flex items-center space-x-2">
            <FaUsers className="text-blue-500" />
            <div className="flex flex-row gap-2">
              <p className="font-semibold text-gray-700">Participants</p>
              <p className="text-gray-600 text-xl font-bold">
                {/* Make the participants count bigger and bold */}
                {event.participants?.length || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
