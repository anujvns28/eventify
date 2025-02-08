import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaFilter } from "react-icons/fa";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import EventCard from "../components/core/EventCard";
import EventCreationForm from "../components/core/EventCreationForm";
import { getAllEvents } from "../service/operation/event";
import useSocketConnection from "../hook/socket";

const Events = () => {
  const [openEventCreationForm, setOpenEventCreationForm] = useState(false);
  const [events, setEvents] = useState([]);
  const { socket, isConnected } = useSocketConnection();

  const fetchAllEvents = async () => {
    try {
      console.log("Fetching events...");
      const result = await getAllEvents();
      if (result && result.length > 0) {
        setEvents(result);
      } else {
        console.log("No events found.");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  useEffect(() => {
    if (!socket) return;

    const handleAddUser = (data) => {
      const { eventId, userId } = data;
      console.log("Received addUser event:", data);

      setEvents((prevEvents) =>
        prevEvents.map((event) => {
          if (event._id.toString() === eventId) {
            if (!event.participants.includes(userId)) {
              const updatedEvent = {
                ...event,
                participants: [...event.participants, userId],
              };

              console.log("After update:", updatedEvent.participants);
              return updatedEvent;
            }
          }
          return event;
        })
      );
    };

    socket.on("addUser", handleAddUser);

    return () => {
      socket.off("addUser", handleAddUser);
    };
  }, [socket]);

  const categories = [
    "All",
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

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");

  const filteredEvents = events.filter((event) => {
    const isCategoryMatch =
      selectedCategory === "All" || event.category === selectedCategory;
    const isDateMatch = !selectedDate || event.date >= selectedDate;
    return isCategoryMatch && isDateMatch;
  });

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 pt-10 flex flex-col items-center px-4 sm:px-8 md:px-14 lg:px-20">
        <div className="flex w-full flex-col md:flex-row justify-between items-center">
          <div className="text-2xl text-blue-700 font-bold mb-4 md:mb-0">
            Event Dashboard
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row w-full md:w-[60%] justify-between items-center">
            <p
              onClick={() => setOpenEventCreationForm(true)}
              className="text-xl underline translate-x-28 text-blue-700 cursor-pointer font-semibold mb-4 md:mb-0"
            >
              Create Event
            </p>

            <div className="flex flex-wrap justify-center gap-6 w-full md:w-[70%] bg-white p-1 rounded-xl shadow-xl">
              <div className="flex items-center gap-3 w-full md:w-[50%]">
                <FaFilter className="text-gray-600 text-xl" />
                <select
                  className="p-3 w-full border rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-3 w-full md:w-[40%]">
                <FaCalendarAlt className="text-gray-600 text-xl" />
                <input
                  type="date"
                  className="p-3 border rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Event Cards */}
        <div className="flex flex-col md:flex-row flex-wrap gap-4 my-5 w-full">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg w-full">
              No events found
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {openEventCreationForm && (
        <EventCreationForm
          setOpenEventCreationForm={setOpenEventCreationForm}
        />
      )}
    </div>
  );
};

export default Events;
