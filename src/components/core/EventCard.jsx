import React from "react";
import { FaRegClock, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg w-80 h-auto p-4 flex flex-col items-center justify-between border border-gray-200 hover:shadow-2xl transition-all relative">
      {/* Organizer Image */}

      {/* Event Image */}
      <div className="w-full h-44 overflow-hidden rounded-lg">
        <img
          src={event.eventImage}
          className="w-full h-full object-cover"
          alt="Event"
        />
      </div>

      <p className="text-4xl my-2 font-bold text-center">{event.eventName}</p>
      <p className="text-center pb-2">{event.description}</p>
      <div className="px-5 py-2 bg-blue-700 rounded-md text-white w-fit flex">
        Join now
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
              <p className="text-gray-600">{event.date}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <div className="flex flex-row gap-2">
              <p className="font-semibold text-gray-700">Location</p>
              <p className="text-gray-600">{event.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
